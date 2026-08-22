import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Sparkles, Shirt, ExternalLink, CalendarPlus, ChevronRight } from 'lucide-react';
import { WEDDING_EVENTS, WEDDING_DETAILS } from '../data/weddingData';
import { TribalGeometricBorder, TribalCornerFiligree } from './TribalDecorations';

interface EventsScheduleProps {
  isGujarati: boolean;
}

export const EventsSchedule: React.FC<EventsScheduleProps> = ({ isGujarati }) => {
  const [selectedDay, setSelectedDay] = useState<'all' | 'day1' | 'day2' | 'day3'>('all');

  const filterEvents = () => {
    if (selectedDay === 'day1') {
      return WEDDING_EVENTS.filter((e) => e.dateGu.includes('૨૬ નવેમ્બર'));
    }
    if (selectedDay === 'day2') {
      return WEDDING_EVENTS.filter((e) => e.dateGu.includes('૨૭ નવેમ્બર'));
    }
    if (selectedDay === 'day3') {
      return WEDDING_EVENTS.filter((e) => e.dateGu.includes('૨૮ નવેમ્બર'));
    }
    return WEDDING_EVENTS;
  };

  const handleAddEventToCal = (evt: typeof WEDDING_EVENTS[0]) => {
    const title = encodeURIComponent(`${evt.titleGu} | ${WEDDING_DETAILS.groom.nameGu} & ${WEDDING_DETAILS.bride.nameGu} લગ્ન`);
    const details = encodeURIComponent(`${evt.descriptionGu}\n\nડ્રેસ કોડ: ${evt.dressCodeGu}`);
    const location = encodeURIComponent(`${evt.venueGu}, ${evt.addressGu}`);
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
    window.open(googleCalUrl, '_blank');
  };

  const events = filterEvents();

  return (
    <section id="events" className="py-16 sm:py-24 bg-[#F5EDE1] relative overflow-hidden">
      <TribalGeometricBorder color="#8C2D19" className="h-3 mb-8 opacity-70" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 text-[#8C2D19] font-serif-gu font-bold text-xs sm:text-sm uppercase tracking-wider mb-2">
            <span className="text-[#D97706]">✦</span>
            <span>{isGujarati ? 'મંગલ કાર્યક્રમ પત્રિકા' : 'Wedding Itinerary & Muhurat'}</span>
            <span className="text-[#D97706]">✦</span>
          </div>
          <h2 className="font-serif-gu text-2xl sm:text-4xl font-bold text-[#8C2D19]">
            {isGujarati ? 'લગ્ન મહોત્સવના શુભ કાર્યક્રમો' : 'Sacred Ceremonies & Celebrations'}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#701D0E] font-serif-gu">
            {isGujarati
              ? 'પરંપરાગત વિધિઓ, રંગારંગ સંગીત-ગરબા અને શાહી પ્રીતિભોજનમાં પધારવા આપનું હાર્દિક સ્વાગત છે.'
              : 'Join us across three days of traditional rituals, energetic Garba, and joyous celebrations.'}
          </p>
        </div>

        {/* Day Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          <button
            id="event-filter-all"
            onClick={() => setSelectedDay('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-serif-gu font-semibold transition-all ${
              selectedDay === 'all'
                ? 'bg-[#8C2D19] text-[#FDE68A] shadow-md border-2 border-[#D97706]'
                : 'bg-[#FAF4EB] text-[#4A2810] hover:bg-[#F3E9D2] border border-[#8C2D19]/30'
            }`}
          >
            {isGujarati ? 'સંપૂર્ણ કાર્યક્રમ (૭ રસમો)' : 'All Ceremonies'}
          </button>
          <button
            id="event-filter-day1"
            onClick={() => setSelectedDay('day1')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-serif-gu font-semibold transition-all ${
              selectedDay === 'day1'
                ? 'bg-[#8C2D19] text-[#FDE68A] shadow-md border-2 border-[#D97706]'
                : 'bg-[#FAF4EB] text-[#4A2810] hover:bg-[#F3E9D2] border border-[#8C2D19]/30'
            }`}
          >
            {isGujarati ? 'દિવસ ૧: ૨૬ નવે (સ્થાપના & પીઠી)' : 'Day 1: Nov 26 (Ganesh Sthapana & Pithi)'}
          </button>
          <button
            id="event-filter-day2"
            onClick={() => setSelectedDay('day2')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-serif-gu font-semibold transition-all ${
              selectedDay === 'day2'
                ? 'bg-[#8C2D19] text-[#FDE68A] shadow-md border-2 border-[#D97706]'
                : 'bg-[#FAF4EB] text-[#4A2810] hover:bg-[#F3E9D2] border border-[#8C2D19]/30'
            }`}
          >
            {isGujarati ? 'દિવસ ૨: ૨૭ નવે (મામેરું & ગરબા)' : 'Day 2: Nov 27 (Mameru & Garba Night)'}
          </button>
          <button
            id="event-filter-day3"
            onClick={() => setSelectedDay('day3')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-serif-gu font-semibold transition-all ${
              selectedDay === 'day3'
                ? 'bg-[#8C2D19] text-[#FDE68A] shadow-md border-2 border-[#D97706]'
                : 'bg-[#FAF4EB] text-[#4A2810] hover:bg-[#F3E9D2] border border-[#8C2D19]/30'
            }`}
          >
            {isGujarati ? 'દિવસ ૩: ૨૮ નવે (લગ્ન & રિસેપ્શન)' : 'Day 3: Nov 28 (Vivah & Reception)'}
          </button>
        </div>

        {/* Event Cards Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {events.map((event) => (
            <div
              key={event.id}
              className={`bg-[#FFFDF9] rounded-2xl p-6 border transition-all hover:shadow-xl relative flex flex-col justify-between ${
                event.highlight
                  ? 'border-[#D97706] ring-2 ring-[#D97706]/40 shadow-md'
                  : 'border-[#8C2D19]/25 shadow-sm'
              }`}
            >
              {event.highlight && (
                <div className="absolute top-3 right-3 bg-[#8C2D19] text-[#FDE68A] text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full flex items-center space-x-1 shadow-sm border border-[#D97706]/40">
                  <Sparkles className="w-3 h-3 text-[#FDE68A]" />
                  <span>{isGujarati ? 'મુખ્ય વિધિ' : 'Key Event'}</span>
                </div>
              )}

              <div>
                {/* Date & Time Header */}
                <div className="flex flex-wrap items-center gap-2 mb-3 text-xs font-semibold">
                  <span className="bg-[#FAF4EB] text-[#8C2D19] px-2.5 py-1 rounded-md border border-[#8C2D19]/30 flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-[#D97706]" />
                    <span>{isGujarati ? event.dateGu : event.dateEn}</span>
                  </span>
                  <span className="bg-[#FAF4EB] text-[#701D0E] px-2.5 py-1 rounded-md border border-[#8C2D19]/30 flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-[#8C2D19]" />
                    <span>{isGujarati ? event.timeGu : event.timeEn}</span>
                  </span>
                </div>

                {/* Event Title */}
                <h3 className="font-serif-gu text-xl font-bold text-[#8C2D19] mb-2">
                  {isGujarati ? event.titleGu : event.titleEn}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#4A2810] font-serif-gu leading-relaxed mb-4">
                  {isGujarati ? event.descriptionGu : event.descriptionEn}
                </p>

                {/* Venue details */}
                <div className="bg-[#FAF4EB] p-3 rounded-xl border border-[#8C2D19]/20 space-y-1.5 mb-4 text-xs">
                  <div className="flex items-start space-x-2 text-[#8C2D19] font-semibold">
                    <MapPin className="w-4 h-4 text-[#8C2D19] shrink-0 mt-0.5" />
                    <span>{isGujarati ? event.venueGu : event.venueEn}</span>
                  </div>
                  <div className="text-[#6B7280] pl-6 text-[11px]">
                    {isGujarati ? event.addressGu : event.addressEn}
                  </div>
                </div>

                {/* Dress code */}
                <div className="flex items-center space-x-2 text-xs text-[#701D0E] bg-[#FAF4EB] px-3 py-1.5 rounded-lg border border-[#8C2D19]/30">
                  <Shirt className="w-4 h-4 text-[#B45309]" />
                  <span className="font-medium">
                    <span className="font-bold">{isGujarati ? 'ડ્રેસ કોડ: ' : 'Dress Code: '}</span>
                    {isGujarati ? event.dressCodeGu : event.dressCodeEn}
                  </span>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-5 pt-3 border-t border-[#8C2D19]/20 flex items-center justify-between">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(event.mapQuery)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-[#8C2D19] hover:text-[#701D0E] transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#8C2D19]" />
                  <span>{isGujarati ? 'મેપ પર જુઓ' : 'Open in Maps'}</span>
                  <ExternalLink className="w-3 h-3 text-[#6B7280]" />
                </a>

                <button
                  onClick={() => handleAddEventToCal(event)}
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-[#8C2D19] hover:text-[#701D0E] bg-[#FAF4EB] hover:bg-[#F3E9D2] px-3 py-1 rounded-md transition-colors border border-[#8C2D19]/30 font-serif-gu"
                >
                  <CalendarPlus className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>{isGujarati ? 'રિમાઇન્ડર' : 'Add to Cal'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
