import React, { useState, useEffect } from 'react';
import { Heart, Send, Sparkles, MessageCircle, User, MapPin, Tag } from 'lucide-react';
import { Blessing } from '../types';
import { INITIAL_BLESSINGS } from '../data/weddingData';

interface BlessingsGuestbookProps {
  onTriggerShower: () => void;
  isGujarati: boolean;
}

const STORAGE_KEY = 'gujarati_wedding_blessings_v1';

export const BlessingsGuestbook: React.FC<BlessingsGuestbookProps> = ({
  onTriggerShower,
  isGujarati,
}) => {
  const [blessings, setBlessings] = useState<Blessing[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Ignored
    }
    return INITIAL_BLESSINGS;
  });

  const [formData, setFormData] = useState({
    senderName: '',
    relationGu: '',
    city: '',
    message: '',
    tag: 'સદા સુખી રહો',
  });

  const [likedIds, setLikedIds] = useState<{ [id: string]: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(blessings));
    } catch {
      // Ignored
    }
  }, [blessings]);

  const tags = [
    'સદા સુખી રહો',
    'અમર જોડી',
    'દીર્ઘાયુ ભવ',
    'ખૂબ ખૂબ અભિનંદન',
    'હૃદયપૂર્વક આશીર્વાદ',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.senderName.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);

    const newBlessing: Blessing = {
      id: 'bless-' + Date.now(),
      senderName: formData.senderName.trim(),
      relationGu: formData.relationGu.trim() || (isGujarati ? 'સ્નેહીજન' : 'Well-Wisher'),
      city: formData.city.trim() || (isGujarati ? 'અમદાવાદ' : 'Ahmedabad'),
      message: formData.message.trim(),
      tag: formData.tag,
      timestamp: isGujarati ? 'હમણાં જ' : 'Just now',
      likes: 1,
    };

    setBlessings([newBlessing, ...blessings]);
    setFormData({
      senderName: '',
      relationGu: '',
      city: '',
      message: '',
      tag: 'સદા સુખી રહો',
    });

    setIsSubmitting(false);
    setShowSuccessMsg(true);
    onTriggerShower();

    setTimeout(() => {
      setShowSuccessMsg(false);
    }, 4000);
  };

  const handleLike = (id: string) => {
    if (likedIds[id]) return;

    setLikedIds((prev) => ({ ...prev, [id]: true }));
    setBlessings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, likes: b.likes + 1 } : b))
    );
    onTriggerShower();
  };

  return (
    <section id="blessings" className="py-16 sm:py-24 bg-[#FFFDF9] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 text-[#851214] font-serif-gu font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2">
            <span className="text-[#C41E3A]">❖</span>
            <span>{isGujarati ? 'શુભેચ્છા મંજૂષા' : 'Digital Blessings & Guestbook'}</span>
            <span className="text-[#C41E3A]">❖</span>
          </div>
          <h2 className="font-serif-gu text-2xl sm:text-4xl font-bold text-[#851214]">
            {isGujarati ? 'નવદંપતીને આપો સ્નેહભર્યા આશીર્વાદ' : 'Shower the Couple with Blessings'}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#6B4B3E] font-serif-gu">
            {isGujarati
              ? 'આપના શુભ વચનો અને મંગળ આશિષ પાર્થ અને પૂજાના દામ્પત્ય જીવનને સદા ઉજાસમય બનાવશે.'
              : 'Write your heartfelt congratulations and wishes to grace their new beginning.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Blessing Submission Form */}
          <div className="lg:col-span-5 bg-[#FAF5EE] rounded-3xl p-6 sm:p-8 border-2 border-[#D4AF37]/50 shadow-xl relative">
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#851214] text-[#FDE68A] mx-auto flex items-center justify-center shadow-md mb-2">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-serif-gu text-lg sm:text-xl font-bold text-[#851214]">
                {isGujarati ? 'ડિજિટલ કંકુ પત્રિકા' : 'Sign the Blessing Book'}
              </h3>
              <p className="text-xs text-[#6B7280] font-serif-gu mt-1">
                {isGujarati ? 'આપનો શુભ સંદેશ અહીં નોંધો' : 'Leave your warm wishes'}
              </p>
            </div>

            {showSuccessMsg && (
              <div className="mb-4 bg-[#ECFDF5] border border-[#10B981] text-[#065F46] p-3 rounded-xl text-xs font-serif-gu flex items-center space-x-2 animate-in fade-in">
                <Sparkles className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>{isGujarati ? 'આપનો આશીર્વાદ સંદેશ સફળતાપૂર્વક નોંધાઈ ગયો છે!' : 'Your blessing has been shared!'}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#851214] mb-1 font-serif-gu">
                  {isGujarati ? 'આપનું પૂરું નામ *' : 'Your Full Name *'}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#9CA3AF] absolute left-3 top-3" />
                  <input
                    id="blessing-name-input"
                    type="text"
                    required
                    value={formData.senderName}
                    onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                    placeholder={isGujarati ? 'દા.ત. રમેશભાઈ પટેલ' : 'e.g. Rameshbhai Patel'}
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white rounded-xl border border-[#E8DFC8] focus:outline-none focus:ring-2 focus:ring-[#851214] focus:border-transparent font-serif-gu"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#851214] mb-1 font-serif-gu">
                    {isGujarati ? 'સંબંધ / ઓળખ' : 'Relation / Group'}
                  </label>
                  <input
                    id="blessing-relation-input"
                    type="text"
                    value={formData.relationGu}
                    onChange={(e) => setFormData({ ...formData, relationGu: e.target.value })}
                    placeholder={isGujarati ? 'કાકા, મામા, મિત્ર વગેરે' : 'Friend / Family'}
                    className="w-full px-3 py-2 text-xs bg-white rounded-xl border border-[#E8DFC8] focus:outline-none focus:ring-2 focus:ring-[#851214] font-serif-gu"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#851214] mb-1 font-serif-gu">
                    {isGujarati ? 'શહેર / ગામ' : 'City'}
                  </label>
                  <div className="relative">
                    <MapPin className="w-3.5 h-3.5 text-[#9CA3AF] absolute left-3 top-2.5" />
                    <input
                      id="blessing-city-input"
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder={isGujarati ? 'અમદાવાદ' : 'Ahmedabad'}
                      className="w-full pl-8 pr-3 py-2 text-xs bg-white rounded-xl border border-[#E8DFC8] focus:outline-none focus:ring-2 focus:ring-[#851214] font-serif-gu"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#851214] mb-1 font-serif-gu">
                  {isGujarati ? 'શુભ આશીર્વાદ ટેગ પસંદ કરો' : 'Select Blessing Tag'}
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setFormData({ ...formData, tag })}
                      className={`text-[11px] font-serif-gu px-2.5 py-1 rounded-full transition-all border ${
                        formData.tag === tag
                          ? 'bg-[#851214] text-[#FDE68A] border-[#851214] font-bold shadow-sm'
                          : 'bg-white text-[#4A2810] hover:bg-[#FEE2E2] border-[#E8DFC8]'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#851214] mb-1 font-serif-gu">
                  {isGujarati ? 'આશીર્વાદ સંદેશ *' : 'Your Blessing Message *'}
                </label>
                <textarea
                  id="blessing-message-input"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={
                    isGujarati
                      ? 'નવદંપતી માટે આપનો સ્નેહભર્યો સંદેશ અહીં લખો...'
                      : 'Write your heartfelt blessings for the newlyweds...'
                  }
                  className="w-full p-3 text-xs sm:text-sm bg-white rounded-xl border border-[#E8DFC8] focus:outline-none focus:ring-2 focus:ring-[#851214] focus:border-transparent font-serif-gu leading-relaxed"
                />
              </div>

              <button
                id="submit-blessing-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#851214] via-[#A8191D] to-[#851214] text-[#FDE68A] hover:text-white py-3 rounded-xl font-serif-gu font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 border border-[#D4AF37]"
              >
                <Sparkles className="w-4 h-4 text-[#FDE68A]" />
                <span>{isGujarati ? 'આશીર્વાદ પાઠવો & પુષ્પવૃષ્ટિ કરો' : 'Send Blessing & Shower Flowers'}</span>
                <Send className="w-4 h-4 ml-1" />
              </button>
            </form>
          </div>

          {/* Blessings Stream / Feed */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between px-1">
              <h3 className="font-serif-gu text-base font-bold text-[#851214] flex items-center space-x-2">
                <span>{isGujarati ? 'સ્નેહીજનોના મંગળ આશીર્વાદ' : 'Recent Blessings'}</span>
                <span className="bg-[#FEF3C7] text-[#92400E] text-xs px-2 py-0.5 rounded-full border border-[#FDE68A]">
                  {blessings.length}
                </span>
              </h3>
              <button
                onClick={onTriggerShower}
                className="text-xs text-[#C41E3A] hover:underline font-serif-gu flex items-center space-x-1"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isGujarati ? 'પુષ્પવૃષ્ટિ' : 'Flower Shower'}</span>
              </button>
            </div>

            <div className="space-y-4 max-h-[580px] overflow-y-auto pr-1">
              {blessings.map((b) => (
                <div
                  key={b.id}
                  className="bg-[#FAF5EE] rounded-2xl p-4 sm:p-5 border border-[#E8DFC8] shadow-sm hover:shadow-md transition-all relative group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-serif-gu font-bold text-sm sm:text-base text-[#851214] flex items-center space-x-2">
                        <span>{b.senderName}</span>
                        <span className="text-[11px] font-normal text-[#6B7280]">({b.relationGu})</span>
                      </div>
                      <div className="text-[11px] text-[#9A3412] flex items-center space-x-2 mt-0.5">
                        <span>{b.city}</span>
                        <span>•</span>
                        <span>{b.timestamp}</span>
                      </div>
                    </div>

                    <span className="bg-[#FEF3C7] text-[#92400E] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#FDE68A] shrink-0">
                      {b.tag}
                    </span>
                  </div>

                  <p className="font-serif-gu text-xs sm:text-sm text-[#374151] leading-relaxed bg-white/70 p-3 rounded-xl border border-[#E8DFC8]">
                    “{b.message}”
                  </p>

                  <div className="mt-3 flex items-center justify-end">
                    <button
                      onClick={() => handleLike(b.id)}
                      className={`flex items-center space-x-1.5 text-xs px-3 py-1 rounded-full border transition-all ${
                        likedIds[b.id]
                          ? 'bg-[#FEE2E2] text-[#DC2626] border-[#FCA5A5]'
                          : 'bg-white text-[#6B7280] hover:text-[#DC2626] hover:bg-[#FFF1F2] border-[#E8DFC8]'
                      }`}
                      title="આશીર્વાદને પ્રેમ આપો"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 ${
                          likedIds[b.id] ? 'fill-[#DC2626] text-[#DC2626]' : ''
                        }`}
                      />
                      <span className="font-semibold text-[11px]">{b.likes}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
