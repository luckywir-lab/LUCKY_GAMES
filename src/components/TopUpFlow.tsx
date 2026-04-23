import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Zap, CreditCard, ChevronRight, CheckCircle2 } from 'lucide-react';
import { PAYMENTS } from '../constants';
import { Game } from '../types';

interface TopUpFlowProps {
  game: Game | null;
  onClose: () => void;
}

const PACKAGES = [
  { id: '1', units: '86 Diamonds', price: 'Rp 20.000', bonus: '+3 Bonus' },
  { id: '2', units: '172 Diamonds', price: 'Rp 40.000', bonus: '+8 Bonus' },
  { id: '3', units: '257 Diamonds', price: 'Rp 60.000', bonus: '+12 Bonus' },
  { id: '4', units: '706 Diamonds', price: 'Rp 160.000', bonus: '+45 Bonus' },
  { id: '5', units: '1412 Diamonds', price: 'Rp 320.000', bonus: '+98 Bonus' },
  { id: '6', units: '2194 Diamonds', price: 'Rp 490.000', bonus: '+150 Bonus' },
];

export default function TopUpFlow({ game, onClose }: TopUpFlowProps) {
  const [step, setStep] = React.useState(1);
  const [selectedId, setSelectedId] = React.useState('');
  const [selectedPackage, setSelectedPackage] = React.useState<string | null>(null);
  const [selectedPayment, setSelectedPayment] = React.useState<string | null>(null);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  if (!game) return null;

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2500);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gold-dark/20 backdrop-blur-md"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-full max-w-md bg-white border border-gold/20 rounded-[2.5rem] p-12 text-center relative shadow-2xl"
        >
          <div className="w-24 h-24 gold-gradient rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-gold/30 border-4 border-white">
             <CheckCircle2 size={48} className="text-black" />
          </div>
          <h2 className="text-3xl font-black mb-4 text-gray-900">Pembayaran Berhasil!</h2>
          <p className="text-gray-600 mb-8 leading-relaxed font-medium">
            Diamond akan segera masuk ke akun <strong className="text-gold-dark">{selectedId}</strong> dalam hitungan detik. Terima kasih telah menggunakan Lucky Games!
          </p>
          <button 
            onClick={onClose}
            className="w-full sultan-button py-4 rounded-2xl text-black font-black hover:scale-105 transition-transform"
          >
            Kembali ke Beranda
          </button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gold-dark/20 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="w-full max-w-4xl max-h-[90vh] overflow-hidden bg-white border border-gold/10 rounded-[2.5rem] flex flex-col lg:flex-row relative shadow-2xl"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gold-light text-gray-500 hover:text-gold-dark transition-all z-10"
        >
          <X size={24} />
        </button>

        {/* Sidebar Info */}
        <div className="lg:w-1/3 bg-gold/5 p-8 border-b lg:border-b-0 lg:border-r border-gold/10">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-gold/20 shadow-xl">
            <img src={game.image} alt={game.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gold-dark/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-[10px] text-gold-pale font-black uppercase tracking-widest">{game.publisher}</p>
              <p className="text-xl font-black text-white">{game.name}</p>
            </div>
          </div>
          <div className="space-y-4 pt-6">
             <div className="flex items-center gap-3 text-sm text-gray-600 font-bold">
                <ShieldCheck size={18} className="text-gold-dark" />
                <span>Transaksi 100% Legal</span>
             </div>
             <div className="flex items-center gap-3 text-sm text-gray-600 font-bold">
                <Zap size={18} className="text-gold-dark" />
                <span>Proses 1-5 Menit</span>
             </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-8 lg:p-12 custom-scrollbar bg-white">
           <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                 {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                       <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= s ? 'gold-gradient text-black' : 'bg-gray-100 text-gray-400 border border-gray-200'}`}>
                          {s}
                       </div>
                       {s < 3 && <div className={`w-8 h-px ${step > s ? 'bg-gold' : 'bg-gray-200'}`} />}
                    </div>
                 ))}
              </div>
              <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                {step === 1 && 'Input Data Akun'}
                {step === 2 && 'Pilih Nominal'}
                {step === 3 && 'Pembayaran'}
              </h2>
           </div>

           <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ x: -20, opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">ID Pengguna</label>
                    <input 
                      type="text" 
                      value={selectedId}
                      onChange={(e) => setSelectedId(e.target.value)}
                      placeholder="Contoh: 12345678 (1234)" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-gold/50 focus:ring-4 focus:ring-gold/10 transition-all text-gray-900 font-bold"
                    />
                    <p className="text-[11px] text-gray-400 pl-1 font-medium italic">TIDAK perlu menyertakan karakter spesial atau kurung manual jika sistem otomatis.</p>
                  </div>
                  <button 
                    disabled={!selectedId}
                    onClick={() => setStep(2)}
                    className="w-full sultan-button py-4 rounded-2xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:grayscale transition-all font-black"
                  >
                    Selanjutnya <ChevronRight size={20} />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ x: -20, opacity: 0 }}
                  className="grid grid-cols-2 gap-4"
                >
                  {PACKAGES.map((pkg) => (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg.id)}
                      className={`p-4 rounded-2xl border transition-all text-left group relative overflow-hidden ${selectedPackage === pkg.id ? 'bg-gold/5 border-gold shadow-lg shadow-gold/10' : 'bg-gray-50 border-gray-200 hover:border-gold/30 hover:bg-white'}`}
                    >
                      <div className="relative z-10">
                        <p className={`font-black text-lg ${selectedPackage === pkg.id ? 'text-gold-dark' : 'text-gray-900'}`}>{pkg.units}</p>
                        <p className="text-sm text-gray-500 font-bold">{pkg.price}</p>
                        <span className="mt-2 inline-block px-2 py-0.5 rounded-md bg-gold/10 text-[10px] font-black text-gold-dark uppercase tracking-tighter">
                          {pkg.bonus}
                        </span>
                      </div>
                      {selectedPackage === pkg.id && <CheckCircle2 className="absolute top-4 right-4 text-gold-dark" size={20} />}
                    </button>
                  ))}
                  <div className="col-span-2 pt-6">
                    <button 
                      disabled={!selectedPackage}
                      onClick={() => setStep(3)}
                      className="w-full sultan-button py-4 rounded-2xl flex items-center justify-center gap-2 disabled:opacity-50 transition-all font-black uppercase tracking-widest text-sm"
                    >
                      Konfirmasi Paket <ChevronRight size={20} />
                    </button>
                    <button onClick={() => setStep(1)} className="w-full mt-4 text-gray-400 hover:text-gold-dark transition-colors text-xs font-black uppercase tracking-widest">Kembali ke Input ID</button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ x: -20, opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="grid gap-3">
                    {PAYMENTS.map((payment) => (
                      <button
                        key={payment.id}
                        onClick={() => setSelectedPayment(payment.id)}
                        className={`p-4 rounded-2xl border flex items-center justify-between transition-all ${selectedPayment === payment.id ? 'bg-gold/5 border-gold shadow-lg shadow-gold/10' : 'bg-gray-50 border-gray-100 hover:border-gold/30 hover:bg-white'}`}
                      >
                         <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-gold-dark shadow-sm">
                               <CreditCard size={20} />
                            </div>
                            <div className="text-left">
                               <p className="font-black text-gray-900 text-sm tracking-tight">{payment.name}</p>
                               <p className="text-[10px] text-gray-400 font-black uppercase tracking-wider">{payment.category}</p>
                            </div>
                         </div>
                         {selectedPayment === payment.id && <CheckCircle2 className="text-gold-dark" size={20} />}
                      </button>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-gray-100 space-y-4">
                    <div className="flex justify-between items-center px-2">
                       <span className="text-gray-400 font-bold text-sm">Total Bayar</span>
                       <span className="text-2xl font-black text-gold-dark tracking-tighter">
                          {PACKAGES.find(p => p.id === selectedPackage)?.price}
                       </span>
                    </div>
                    <button 
                      disabled={!selectedPayment || isProcessing}
                      onClick={handlePayment}
                      className="w-full sultan-button py-5 rounded-2xl flex items-center justify-center gap-2 disabled:opacity-50 transition-all font-black uppercase tracking-widest"
                    >
                      {isProcessing ? (
                         <span className="w-6 h-6 border-4 border-black/10 border-t-black rounded-full animate-spin" />
                      ) : (
                        <>Bayar Sekarang <CreditCard size={20} /></>
                      )}
                    </button>
                    <p className="text-center text-[10px] text-gray-400 px-8 font-semibold">
                       Dengan menekan tombol Bayar Sekarang, Anda menyetujui Ketentuan Layanan Lucky Games.
                    </p>
                  </div>
                </motion.div>
              )}
           </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
