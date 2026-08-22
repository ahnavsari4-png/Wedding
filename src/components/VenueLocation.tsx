import React from 'react';
import { MapPin, Navigation, Phone, Car, Train, Plane, Info, ExternalLink } from 'lucide-react';
import { WEDDING_DETAILS } from '../data/weddingData';

interface VenueLocationProps {
  isGujarati: boolean;
}

export const VenueLocation: React.FC<VenueLocationProps> = ({ isGujarati }) => {
  return (
    <section id="venue" className="py-16 sm:py-24 bg-[#FFFDF9] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 text-[#851214] font-serif-gu font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2">
            <span className="text-[#C41E3A]">❖</span>
            <span>{isGujarati ? 'સ્થળ દર્શન & માર્ગદર્શન' : 'Venue & Directions'}</span>
            <span className="text-[#C41E3A]">❖</span>
          </div>
          <h2 className="font-serif-gu text-2xl sm:text-4xl font-bold text-[#851214]">
            {isGujarati ? 'શુભ લગ્ન સમારંભ સ્થળ' : 'The Wedding Venue'}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#6B4B3E] font-serif-gu">
            {isGujarati
              ? 'રાનકુવા (ચીખલી, નવસારી) ખાતે આવેલું ભવ્ય અને સુવિધાજનક લગ્ન સ્થળ.'
              : 'Conveniently located at Rankuva, Chikhali (Navsari) with warm hospitality and parking.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Venue Card Details */}
          <div className="lg:col-span-7 bg-[#FAF5EE] rounded-3xl p-6 sm:p-8 border border-[#E8DFC8] shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#851214] text-[#FDE68A] flex items-center justify-center shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#9A3412] tracking-wider">
                    {isGujarati ? 'મુખ્ય લગ્ન સ્થળ' : 'Main Wedding Venue'}
                  </div>
                  <h3 className="font-serif-gu text-xl sm:text-2xl font-bold text-[#851214]">
                    {isGujarati ? WEDDING_DETAILS.mainVenueGu : WEDDING_DETAILS.mainVenueEn}
                  </h3>
                </div>
              </div>

              <p className="font-serif-gu text-xs sm:text-sm text-[#4A2810] leading-relaxed mb-6 bg-white/80 p-3 rounded-xl border border-[#E8DFC8]">
                {isGujarati ? WEDDING_DETAILS.mainVenueAddressGu : WEDDING_DETAILS.mainVenueAddressEn}
              </p>

              {/* Transportation Guides */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="bg-white p-3 rounded-xl border border-[#E8DFC8] text-xs font-serif-gu">
                  <div className="flex items-center space-x-1.5 font-bold text-[#851214] mb-1">
                    <Plane className="w-4 h-4 text-[#C41E3A]" />
                    <span>એરપોર્ટ</span>
                  </div>
                  <div className="text-[#6B7280]">સુરત ઇન્ટરનેશનલ એરપોર્ટ (૬૦ કિ.મી.)</div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-[#E8DFC8] text-xs font-serif-gu">
                  <div className="flex items-center space-x-1.5 font-bold text-[#851214] mb-1">
                    <Train className="w-4 h-4 text-[#C41E3A]" />
                    <span>રેલવે સ્ટેશન</span>
                  </div>
                  <div className="text-[#6B7280]">નવસારી / બીલીમોરા રેલવે સ્ટેશન</div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-[#E8DFC8] text-xs font-serif-gu">
                  <div className="flex items-center space-x-1.5 font-bold text-[#851214] mb-1">
                    <Car className="w-4 h-4 text-[#C41E3A]" />
                    <span>પાર્કિંગ સુવિધા</span>
                  </div>
                  <div className="text-[#6B7280]">વિશાળ વાહન પાર્કિંગ વ્યવસ્થા ઉપલબ્ધ</div>
                </div>
              </div>
            </div>

            {/* Google Map Button */}
            <div className="pt-4 border-t border-[#E8DFC8] flex flex-wrap gap-3 items-center justify-between">
              <a
                id="venue-google-maps-btn"
                href={WEDDING_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-[#851214] to-[#C41E3A] text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-serif-gu font-bold shadow hover:shadow-md transition-all flex items-center space-x-2 border border-[#FDE68A]/30"
              >
                <Navigation className="w-4 h-4 text-[#FDE68A]" />
                <span>{isGujarati ? 'Google Maps પર દિશા-નિર્દેશ મેળવો' : 'Get Directions in Google Maps'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <span className="text-xs text-[#78350F] font-serif-gu font-semibold">
                લેન્ડમાર્ક: જલારામ સોસાયટી, રાનકુવા
              </span>
            </div>
          </div>

          {/* Contact & Helpline Numbers */}
          <div className="lg:col-span-5 bg-[#FAF5EE] rounded-3xl p-6 sm:p-8 border border-[#E8DFC8] shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FEF3C7] text-[#92400E] border border-[#F59E0B]/40 flex items-center justify-center shadow-sm">
                  <Phone className="w-6 h-6 text-[#D97706]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#9A3412] tracking-wider">
                    {isGujarati ? 'સહાયતા & માર્ગદર્શન' : 'Helpdesk & Assistance'}
                  </div>
                  <h3 className="font-serif-gu text-xl font-bold text-[#851214]">
                    {isGujarati ? 'નિમંત્રક સંપર્ક સૂચિ' : 'Family Contacts'}
                  </h3>
                </div>
              </div>

              <p className="text-xs font-serif-gu text-[#6B4B3E] mb-4">
                {isGujarati
                  ? 'કોઈપણ પૂછપરછ અથવા મુસાફરી સહાય માટે અમારા પરિવારના સભ્યોનો સંપર્ક કરી શકો છો.'
                  : 'Feel free to contact our family members for directions or assistance.'}
              </p>

              <div className="space-y-3">
                {WEDDING_DETAILS.contactNumbers.map((c, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-3.5 rounded-xl border border-[#E8DFC8] flex items-center justify-between"
                  >
                    <div>
                      <div className="font-serif-gu font-bold text-xs sm:text-sm text-[#851214]">
                        {c.nameGu}
                      </div>
                      <div className="text-xs text-[#6B7280] font-mono mt-0.5">{c.phone}</div>
                    </div>
                    <a
                      href={`tel:${c.phone.replace(/\s+/g, '')}`}
                      className="p-2 rounded-lg bg-[#FAF5EE] text-[#851214] hover:bg-[#851214] hover:text-[#FDE68A] border border-[#D4AF37] transition-colors"
                      title="કોલ કરો"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8DFC8] flex items-center space-x-2 text-xs font-serif-gu text-[#78350F]">
              <Info className="w-4 h-4 text-[#D97706] shrink-0" />
              <span>બહારગામથી પધારતા અતિથિઓ માટે નિવાસ વ્યવસ્થા ઉપલબ્ધ છે.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
