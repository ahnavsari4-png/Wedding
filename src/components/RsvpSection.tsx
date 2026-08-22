import React, { useState } from 'react';
import { CheckCircle2, User, Phone, Users, Utensils, Calendar, Sparkles, Printer, RefreshCw, QrCode } from 'lucide-react';
import { RsvpData } from '../types';
import { WEDDING_EVENTS, WEDDING_DETAILS } from '../data/weddingData';
import { TribalGeometricBorder, TribalCornerFiligree } from './TribalDecorations';

interface RsvpSectionProps {
  onTriggerShower: () => void;
  isGujarati: boolean;
}

const RSVP_STORAGE_KEY = 'gujarati_wedding_rsvps_v1';

export const RsvpSection: React.FC<RsvpSectionProps> = ({
  onTriggerShower,
  isGujarati,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    guestCount: 2,
    dietPreference: 'gujarati' as const,
    attendingEvents: ['garba-sangeet', 'hasta-melap', 'reception-bhojan'],
    message: '',
  });

  const [submittedPass, setSubmittedPass] = useState<RsvpData | null>(() => {
    try {
      const saved = localStorage.getItem(RSVP_STORAGE_KEY + '_latest');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Ignored
    }
    return null;
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleEvent = (eventId: string) => {
    if (formData.attendingEvents.includes(eventId)) {
      setFormData({
        ...formData,
        attendingEvents: formData.attendingEvents.filter((id) => id !== eventId),
      });
    } else {
      setFormData({
        ...formData,
        attendingEvents: [...formData.attendingEvents, eventId],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) return;

    setIsSubmitting(true);

    const rsvp: RsvpData = {
      id: 'VIVAH-' + Math.floor(1000 + Math.random() * 9000),
      fullName: formData.fullName.trim(),
      phone: formData.phone.trim(),
      guestCount: formData.guestCount,
      dietPreference: formData.dietPreference,
      attendingEvents: formData.attendingEvents,
      message: formData.message.trim(),
      submittedAt: new Date().toLocaleDateString('gu-IN'),
    };

    try {
      localStorage.setItem(RSVP_STORAGE_KEY + '_latest', JSON.stringify(rsvp));
    } catch {
      // Ignored
    }

    setSubmittedPass(rsvp);
    setIsSubmitting(false);
    onTriggerShower();
  };

  const handleResetPass = () => {
    setSubmittedPass(null);
    try {
      localStorage.removeItem(RSVP_STORAGE_KEY + '_latest');
    } catch {
      // Ignored
    }
  };

  return (
    <section id="rsvp" className="py-16 sm:py-24 bg-[#FFFDF9] relative overflow-hidden">
      <TribalGeometricBorder color="#8C2D19" className="h-3 mb-8 opacity-70" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 text-[#8C2D19] font-serif-gu font-bold text-xs sm:text-sm uppercase tracking-wider mb-2">
            <span className="text-[#D97706]">✦</span>
            <span>{isGujarati ? 'સ્નેહ ઉપસ્થિતિ નોંધણી' : 'RSVP & Guest Registration'}</span>
            <span className="text-[#D97706]">✦</span>
          </div>
          <h2 className="font-serif-gu text-2xl sm:text-4xl font-bold text-[#8C2D19]">
            {isGujarati ? 'આપની શુભ હાજરીની નોંધણી કરો' : 'Kindly Confirm Your Presence'}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#701D0E] font-serif-gu">
            {isGujarati
              ? 'ભોજન વ્યવસ્થા અને આતિથ્ય સત્કારના ઉત્તમ આયોજન માટે કૃપા કરીને આપના આગમનની વિગતો જણાવશો.'
              : 'Please RSVP so we can warmly prepare for your gracious hospitality and royal feast.'}
          </p>
        </div>

        {/* If RSVP is already confirmed, show the Digital Wedding Pass Card */}
        {submittedPass ? (
          <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 border-2 border-[#8C2D19] shadow-2xl max-w-2xl mx-auto relative overflow-hidden animate-in zoom-in-95 duration-300">
            {/* Ornate Pass Header */}
            <div className="bg-gradient-to-r from-[#701D0E] via-[#8C2D19] to-[#701D0E] text-[#FDE68A] p-4 -m-6 sm:-m-10 mb-6 sm:mb-8 text-center border-b-2 border-[#D97706]">
              <div className="text-xs font-serif-gu">॥ શ્રી ગણેશાય નમઃ ॥</div>
              <h3 className="font-serif-gu text-lg sm:text-xl font-bold mt-1">
                લગ્ન ઉત્સવ ડિજિટલ એન્ટ્રી પાસ (Wedding Pass)
              </h3>
              <div className="text-[11px] text-white/90">
                {WEDDING_DETAILS.groom.nameGu} weds {WEDDING_DETAILS.bride.nameGu} • {WEDDING_DETAILS.weddingDateFormattedGu}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF4EB] border border-[#8C2D19]/25">
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#701D0E]">પાસ નંબર / Pass ID</div>
                  <div className="font-mono text-base font-bold text-[#8C2D19]">#{submittedPass.id}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase font-bold text-[#701D0E]">મહેમાન સંખ્યા</div>
                  <div className="font-serif-gu font-bold text-base text-[#8C2D19]">{submittedPass.guestCount} વ્યક્તિઓ</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-serif-gu">
                <div className="bg-[#FAF4EB] p-3 rounded-xl border border-[#8C2D19]/20">
                  <span className="text-[#6B7280]">આમંત્રિત નામ:</span>
                  <div className="font-bold text-[#8C2D19] text-sm mt-0.5">{submittedPass.fullName}</div>
                </div>
                <div className="bg-[#FAF4EB] p-3 rounded-xl border border-[#8C2D19]/20">
                  <span className="text-[#6B7280]">સંપર્ક નંબર:</span>
                  <div className="font-bold text-[#8C2D19] text-sm mt-0.5">{submittedPass.phone}</div>
                </div>
                <div className="bg-[#FAF4EB] p-3 rounded-xl border border-[#8C2D19]/20">
                  <span className="text-[#6B7280]">ભોજન પસંદગી:</span>
                  <div className="font-bold text-[#8C2D19] mt-0.5">
                    {submittedPass.dietPreference === 'jain'
                      ? 'જૈન શુદ્ધ આહાર (કાંદા-લસણ વગર)'
                      : submittedPass.dietPreference === 'kathiyawadi'
                      ? 'કાઠિયાવાડી શાહી થાળી'
                      : 'શાહી ગુજરાતી ભોજન'}
                  </div>
                </div>
                <div className="bg-[#FAF4EB] p-3 rounded-xl border border-[#8C2D19]/20">
                  <span className="text-[#6B7280]">સ્થળ:</span>
                  <div className="font-bold text-[#8C2D19] mt-0.5">{WEDDING_DETAILS.mainVenueGu}</div>
                </div>
              </div>

              {/* QR Code Illustration Badge */}
              <div className="border border-dashed border-[#8C2D19]/40 p-4 rounded-xl text-center bg-[#FAF4EB] flex items-center justify-center space-x-4">
                <div className="p-2 bg-white rounded-lg border border-[#8C2D19]/30 shadow-inner">
                  <QrCode className="w-12 h-12 text-[#8C2D19]" />
                </div>
                <div className="text-left text-xs font-serif-gu">
                  <div className="font-bold text-[#8C2D19]">આપની નોંધણી સુનિશ્ચિત થઈ ગઈ છે!</div>
                  <div className="text-[#701D0E] text-[11px] mt-0.5">
                    લગ્ન સ્થળે આપનું ભાવભર્યું સ્વાગત છે.
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#8C2D19]/20">
                <button
                  onClick={() => window.print()}
                  className="flex items-center space-x-1.5 bg-gradient-to-r from-[#701D0E] to-[#8C2D19] text-[#FDE68A] hover:brightness-110 px-4 py-2 rounded-xl text-xs font-serif-gu font-bold transition-all shadow border border-[#D97706]/40"
                >
                  <Printer className="w-4 h-4" />
                  <span>પાસ પ્રિન્ટ કરો</span>
                </button>

                <button
                  onClick={handleResetPass}
                  className="flex items-center space-x-1.5 text-xs text-[#701D0E] hover:text-[#8C2D19] font-serif-gu transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>ફરીથી નોંધણી કરો</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* RSVP Form */
          <div className="bg-[#FAF4EB] rounded-3xl p-6 sm:p-10 border border-[#8C2D19]/30 shadow-xl max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#8C2D19] mb-1 font-serif-gu">
                    {isGujarati ? 'આપનું પૂરું નામ *' : 'Your Full Name *'}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#8C2D19]/60 absolute left-3 top-3" />
                    <input
                      id="rsvp-fullname"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={isGujarati ? 'શ્રી / શ્રીમતી...' : 'Full Name'}
                      className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-[#8C2D19]/30 focus:outline-none focus:ring-2 focus:ring-[#8C2D19] font-serif-gu text-[#4A2810]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#8C2D19] mb-1 font-serif-gu">
                    {isGujarati ? 'મોબાઇલ નંબર *' : 'Mobile Number *'}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#8C2D19]/60 absolute left-3 top-3" />
                    <input
                      id="rsvp-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={isGujarati ? '૯૮૨૫૦ XXXXX' : '+91 98250 12345'}
                      className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-[#8C2D19]/30 focus:outline-none focus:ring-2 focus:ring-[#8C2D19] font-serif-gu text-[#4A2810]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#8C2D19] mb-1 font-serif-gu">
                    {isGujarati ? 'કુલ મહેમાનોની સંખ્યા *' : 'Number of Guests *'}
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#8C2D19]/60 absolute left-3 top-3" />
                    <select
                      id="rsvp-guest-count"
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                      className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-[#8C2D19]/30 focus:outline-none focus:ring-2 focus:ring-[#8C2D19] font-serif-gu text-[#4A2810]"
                    >
                      <option value={1}>૧ વ્યક્તિ (1 Person)</option>
                      <option value={2}>૨ વ્યક્તિઓ - દંપતી (2 Persons)</option>
                      <option value={3}>૩ વ્યક્તિઓ (3 Persons)</option>
                      <option value={4}>૪ વ્યક્તિઓ - સપરિવાર (4 Persons)</option>
                      <option value={5}>૫ વ્યક્તિઓ (5 Persons)</option>
                      <option value={6}>૬ કે વધુ વ્યક્તિઓ (6+ Persons)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#8C2D19] mb-1 font-serif-gu">
                    {isGujarati ? 'ભોજન પસંદગી *' : 'Meal Preference *'}
                  </label>
                  <div className="relative">
                    <Utensils className="w-4 h-4 text-[#8C2D19]/60 absolute left-3 top-3" />
                    <select
                      id="rsvp-diet"
                      value={formData.dietPreference}
                      onChange={(e) => setFormData({ ...formData, dietPreference: e.target.value as any })}
                      className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-[#8C2D19]/30 focus:outline-none focus:ring-2 focus:ring-[#8C2D19] font-serif-gu text-[#4A2810]"
                    >
                      <option value="gujarati">શાહી ગુજરાતી ભોજન (Gujarati Banquet)</option>
                      <option value="jain">જૈન ભોજન - કાંદા લસણ વગર (Jain Pure Food)</option>
                      <option value="kathiyawadi">કાઠિયાવાડી દેશી થાળી (Kathiyawadi Delight)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Event Attendance Checkboxes */}
              <div>
                <label className="block text-xs font-bold text-[#8C2D19] mb-2 font-serif-gu">
                  {isGujarati ? 'આપ ક્યા કાર્યક્રમોમાં ઉપસ્થિત રહેશો?' : 'Events you will attend:'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {WEDDING_EVENTS.map((evt) => {
                    const isChecked = formData.attendingEvents.includes(evt.id);
                    return (
                      <div
                        key={evt.id}
                        onClick={() => toggleEvent(evt.id)}
                        className={`p-2.5 rounded-xl border cursor-pointer flex items-center justify-between text-xs font-serif-gu transition-all ${
                          isChecked
                            ? 'bg-[#FAF4EB] border-[#8C2D19] text-[#8C2D19] font-bold shadow-sm'
                            : 'bg-white border-[#8C2D19]/20 text-[#4B5563]'
                        }`}
                      >
                        <span>{evt.titleGu}</span>
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border ${
                            isChecked
                              ? 'bg-[#8C2D19] border-[#8C2D19] text-white'
                              : 'bg-white border-gray-300'
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-[#FDE68A]" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Message to family */}
              <div>
                <label className="block text-xs font-bold text-[#8C2D19] mb-1 font-serif-gu">
                  {isGujarati ? 'પરિવાર માટે ખાસ નોંધ / શુભેચ્છા' : 'Special Note / Wishes'}
                </label>
                <textarea
                  id="rsvp-note"
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={isGujarati ? 'દા.ત. અમે ગરબા નાઈટમાં સમયસર પહોંચી જઈશું...' : 'Optional message...'}
                  className="w-full p-2.5 text-xs bg-white rounded-xl border border-[#8C2D19]/30 focus:outline-none focus:ring-2 focus:ring-[#8C2D19] font-serif-gu text-[#4A2810]"
                />
              </div>

              <button
                id="submit-rsvp-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#701D0E] via-[#8C2D19] to-[#701D0E] text-[#FDE68A] hover:brightness-110 py-3.5 rounded-xl font-serif-gu font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all border border-[#D97706]/40 flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-5 h-5 text-[#FDE68A]" />
                <span>{isGujarati ? 'હાજરી નોંધણી કરો & ડિજિટલ પાસ મેળવો' : 'Confirm RSVP & Get Digital Pass'}</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};
