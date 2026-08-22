/**
 * Web Audio Synthesizer for Authentic Gujarati Wedding Mangal Dhun & Shehnai
 * Plays Raag Yaman / Vivah Mangal Dhun with Tanpura Drone
 */

class WeddingAudioPlayer {
  private ctx: AudioContext | null = null;
  private isPlayingAudio: boolean = false;
  private masterGain: GainNode | null = null;
  private melodyTimer: number | null = null;
  private droneOscillators: OscillatorNode[] = [];
  private volume: number = 0.25;

  private notes: { [key: string]: number } = {
    'Sa_low': 130.81, // C3
    'Pa_low': 196.00, // G3
    'Ni_low': 246.94, // B3
    'Sa': 261.63,     // C4
    'Re': 293.66,     // D4
    'Ga': 329.63,     // E4
    'Ma_tivra': 369.99, // F#4 (Raag Yaman)
    'Pa': 392.00,     // G4
    'Dha': 440.00,    // A4
    'Ni': 493.88,     // B4
    'Sa_high': 523.25, // C5
    'Re_high': 587.33, // D5
    'Ga_high': 659.25, // E5
  };

  // Traditional Mangal Shehnai sequence (Raag Yaman Wedding theme)
  private melodySequence: { note: string; duration: number; rest: number }[] = [
    { note: 'Ni_low', duration: 0.6, rest: 0.1 },
    { note: 'Re', duration: 0.8, rest: 0.1 },
    { note: 'Ga', duration: 1.0, rest: 0.15 },
    { note: 'Ma_tivra', duration: 0.7, rest: 0.1 },
    { note: 'Dha', duration: 0.9, rest: 0.1 },
    { note: 'Ni', duration: 1.1, rest: 0.2 },
    { note: 'Sa_high', duration: 1.6, rest: 0.3 },

    // Return descending melody
    { note: 'Ni', duration: 0.7, rest: 0.1 },
    { note: 'Dha', duration: 0.7, rest: 0.1 },
    { note: 'Pa', duration: 1.2, rest: 0.2 },
    { note: 'Ma_tivra', duration: 0.8, rest: 0.1 },
    { note: 'Ga', duration: 0.8, rest: 0.1 },
    { note: 'Re', duration: 1.2, rest: 0.2 },
    { note: 'Sa', duration: 1.8, rest: 0.4 },

    // Vivah celebratory phrase
    { note: 'Pa', duration: 0.8, rest: 0.1 },
    { note: 'Dha', duration: 0.8, rest: 0.1 },
    { note: 'Sa_high', duration: 1.4, rest: 0.2 },
    { note: 'Ni', duration: 0.9, rest: 0.1 },
    { note: 'Dha', duration: 0.9, rest: 0.1 },
    { note: 'Pa', duration: 1.5, rest: 0.4 },
  ];

  private currentStep = 0;

  private init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
  }

  public async start() {
    this.init();
    if (!this.ctx) return;

    if (this.ctx.state === 'suspended') {
      await this.ctx.resume();
    }

    this.isPlayingAudio = true;
    this.startDrone();
    this.playNextShehnaiNote();
  }

  public stop() {
    this.isPlayingAudio = false;
    if (this.melodyTimer) {
      window.clearTimeout(this.melodyTimer);
      this.melodyTimer = null;
    }
    this.stopDrone();
  }

  public toggle(): boolean {
    if (this.isPlayingAudio) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public isPlaying(): boolean {
    return this.isPlayingAudio;
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  private startDrone() {
    if (!this.ctx || !this.masterGain) return;
    this.stopDrone();

    // Tanpura Root notes: Sa (C3, C4) and Pa (G3)
    const droneFreqs = [130.81, 196.00, 261.63];

    droneFreqs.forEach((freq, index) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Warm Tanpura harmonic overtone
      osc.type = index === 1 ? 'triangle' : 'sawtooth';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Low pass filter for soft resonant drone
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450 + index * 100, this.ctx.currentTime);

      // Gentle pulsating envelope
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);

      // Subtle vibrato (LFO)
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.15 + index * 0.05, this.ctx.currentTime);
      lfoGain.gain.setValueAtTime(1.5, this.ctx.currentTime);
      lfo.connect(osc.frequency);
      lfo.start();

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);
      osc.start();

      this.droneOscillators.push(osc);
    });
  }

  private stopDrone() {
    this.droneOscillators.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // Ignored
      }
    });
    this.droneOscillators = [];
  }

  private playNextShehnaiNote = () => {
    if (!this.isPlayingAudio || !this.ctx || !this.masterGain) return;

    const item = this.melodySequence[this.currentStep];
    const freq = this.notes[item.note] || 261.63;
    const duration = item.duration;
    const now = this.ctx.currentTime;

    // Shehnai dual oscillator for rich reed texture
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc1.type = 'sawtooth';
    osc2.type = 'square';

    // Slight detune for authentic Indian reed chorus
    osc1.frequency.setValueAtTime(freq, now);
    osc2.frequency.setValueAtTime(freq * 1.004, now);

    // Subtle pitch meend (glide)
    osc1.frequency.exponentialRampToValueAtTime(freq * 1.002, now + duration);
    osc2.frequency.exponentialRampToValueAtTime(freq * 1.006, now + duration);

    // Warm bandpass filter simulating Shehnai wooden horn
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(freq * 1.8, now);
    filter.Q.setValueAtTime(2.5, now);

    // Shehnai volume envelope (attack + sustain + release)
    noteGain.gain.setValueAtTime(0, now);
    noteGain.gain.linearRampToValueAtTime(0.14, now + 0.12);
    noteGain.gain.exponentialRampToValueAtTime(0.09, now + duration * 0.8);
    noteGain.gain.linearRampToValueAtTime(0.001, now + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration + 0.05);
    osc2.stop(now + duration + 0.05);

    this.currentStep = (this.currentStep + 1) % this.melodySequence.length;

    const nextDelay = (duration + item.rest) * 1000;
    this.melodyTimer = window.setTimeout(this.playNextShehnaiNote, nextDelay);
  };
}

export const weddingAudio = new WeddingAudioPlayer();
