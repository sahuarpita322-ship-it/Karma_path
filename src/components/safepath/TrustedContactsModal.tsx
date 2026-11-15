import React, { useState } from 'react';
import { 
  FaUserFriends, 
  FaPlus, 
  FaTrash, 
  FaStar, 
  FaRegStar, 
  FaShieldAlt, 
  FaTimes, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaCheckCircle, 
  FaPaperPlane,
  FaExclamationCircle
} from 'react-icons/fa';
import { TrustedContact } from '../../data/safePathTypes';
import { saveTrustedContacts, dispatchEmergencyNotificationToContacts } from '../../data/safePathService';

interface TrustedContactsModalProps {
  isOpen: boolean;
  onClose: () => void;
  contacts: TrustedContact[];
  onContactsUpdated: (contacts: TrustedContact[]) => void;
  currentLocation?: { lat: number; lng: number };
}

export function TrustedContactsModal({
  isOpen,
  onClose,
  contacts,
  onContactsUpdated,
  currentLocation
}: TrustedContactsModalProps) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState<TrustedContact['relationship']>('Father');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [hasAlertPermission, setHasAlertPermission] = useState(true);
  const [isPrimary, setIsPrimary] = useState(false);
  const [formError, setFormError] = useState('');
  const [testNotificationStatus, setTestNotificationStatus] = useState<string | null>(null);

  if (!isOpen) return null;

  // Validate Indian 10-digit Mobile Number
  const validatePhone = (num: string): boolean => {
    const cleaned = num.replace(/\D/g, '');
    return cleaned.length === 10 && /^[6-9]/.test(cleaned);
  };

  const handleAddContact = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!name.trim()) {
      setFormError('Please enter contact full name');
      return;
    }

    const cleanedPhone = phone.replace(/\D/g, '');
    if (!validatePhone(cleanedPhone)) {
      setFormError('Please enter a valid 10-digit Indian mobile number (e.g. 9876543210)');
      return;
    }

    if (contacts.length >= 5) {
      setFormError('Maximum 5 trusted emergency contacts allowed.');
      return;
    }

    // Check duplicate phone
    if (contacts.some(c => c.phone.replace(/\D/g, '') === cleanedPhone)) {
      setFormError('A contact with this mobile number already exists');
      return;
    }

    const newContact: TrustedContact = {
      id: `tc-${Date.now()}`,
      name: name.trim(),
      relationship,
      phone: `+91 ${cleanedPhone.slice(0, 5)} ${cleanedPhone.slice(5)}`,
      email: email.trim() || undefined,
      hasAlertPermission,
      isPrimary: contacts.length === 0 ? true : isPrimary,
      createdAt: new Date().toISOString()
    };

    let updatedContacts = [...contacts];
    if (newContact.isPrimary) {
      updatedContacts = updatedContacts.map(c => ({ ...c, isPrimary: false }));
    }
    updatedContacts.push(newContact);

    saveTrustedContacts(updatedContacts);
    onContactsUpdated(updatedContacts);

    // Reset Form
    setName('');
    setPhone('');
    setEmail('');
    setIsPrimary(false);
    setShowAddForm(false);
  };

  const handleDeleteContact = (id: string) => {
    const remaining = contacts.filter(c => c.id !== id);
    if (remaining.length > 0 && !remaining.some(c => c.isPrimary)) {
      remaining[0].isPrimary = true;
    }
    saveTrustedContacts(remaining);
    onContactsUpdated(remaining);
  };

  const handleSetPrimary = (id: string) => {
    const updated = contacts.map(c => ({
      ...c,
      isPrimary: c.id === id
    }));
    saveTrustedContacts(updated);
    onContactsUpdated(updated);
  };

  const handleToggleAlert = (id: string) => {
    const updated = contacts.map(c => {
      if (c.id === id) {
        return { ...c, hasAlertPermission: !c.hasAlertPermission };
      }
      return c;
    });
    saveTrustedContacts(updated);
    onContactsUpdated(updated);
  };

  const handleSendTestAlert = async (contact: TrustedContact) => {
    const loc = currentLocation || { lat: 20.2961, lng: 85.8245 };
    await dispatchEmergencyNotificationToContacts([contact], 'Test Alert', loc, 'Bhubaneswar to Puri Safe Journey');
    setTestNotificationStatus(`Test alert generated for ${contact.name}! Alert link launched via SMS/WebShare.`);
    setTimeout(() => setTestNotificationStatus(null), 5000);
  };

  return (
    <div className="fixed inset-0 z-[1200] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#140C24] rounded-3xl border border-violet-200 dark:border-violet-800/60 shadow-2xl w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-5 border-b border-violet-100 dark:border-violet-900/40 flex items-center justify-between bg-gradient-to-r from-violet-50/50 to-purple-50/50 dark:from-violet-950/40 dark:to-purple-950/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-violet-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-violet-500/25">
              <FaUserFriends />
            </div>
            <div>
              <h2 className="text-lg font-bold text-stone-900 dark:text-white">Trusted Emergency Contacts</h2>
              <p className="text-xs text-stone-500 dark:text-violet-300">
                {contacts.length}/5 Registered · Family & verified contacts notified during alerts
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-700 dark:hover:text-white hover:bg-violet-100 dark:hover:bg-violet-900/50 transition"
          >
            <FaTimes />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1">
          {testNotificationStatus && (
            <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs flex items-center gap-2 animate-fadeIn">
              <FaCheckCircle className="flex-shrink-0 text-emerald-500" />
              <span>{testNotificationStatus}</span>
            </div>
          )}

          {/* List of contacts */}
          {contacts.length === 0 ? (
            <div className="text-center py-10 px-4 rounded-2xl border-2 border-dashed border-violet-200 dark:border-violet-900/60 bg-violet-50/30 dark:bg-violet-950/20">
              <div className="w-14 h-14 rounded-full bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 mx-auto text-2xl mb-3">
                <FaShieldAlt />
              </div>
              <h3 className="text-sm font-bold text-stone-900 dark:text-white">No Trusted Contacts Added Yet</h3>
              <p className="text-xs text-stone-600 dark:text-violet-300/80 max-w-sm mx-auto mt-1 mb-4">
                Karma-Path does not use fake or simulated phone numbers. Add your genuine family members or close friends (up to 5) so they receive instant SOS alerts with your live GPS location.
              </p>
              <button
                onClick={() => setShowAddForm(true)}
                className="px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl text-xs font-semibold shadow-lg shadow-violet-600/30 hover:scale-[1.02] transition inline-flex items-center gap-2"
              >
                <FaPlus /> Add First Contact
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {contacts.map((contact) => (
                <div 
                  key={contact.id}
                  className={`p-4 rounded-2xl border transition-all ${
                    contact.isPrimary 
                      ? 'border-violet-500/50 bg-violet-50/40 dark:bg-violet-950/30 shadow-md' 
                      : 'border-violet-100 dark:border-violet-900/40 bg-white dark:bg-violet-950/10'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-stone-900 dark:text-white truncate">
                          {contact.name}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-100 dark:bg-violet-900/60 text-violet-700 dark:text-violet-300 font-medium">
                          {contact.relationship}
                        </span>
                        {contact.isPrimary && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-bold flex items-center gap-1">
                            <FaStar className="text-[9px]" /> Primary
                          </span>
                        )}
                      </div>

                      <div className="mt-1 space-y-0.5 text-xs text-stone-600 dark:text-stone-300">
                        <div className="flex items-center gap-1.5 font-mono">
                          <FaPhoneAlt className="text-[10px] text-violet-500" />
                          <span>{contact.phone}</span>
                        </div>
                        {contact.email && (
                          <div className="flex items-center gap-1.5 text-stone-500 dark:text-stone-400">
                            <FaEnvelope className="text-[10px]" />
                            <span className="truncate">{contact.email}</span>
                          </div>
                        )}
                      </div>

                      {/* Permissions row */}
                      <div className="mt-3 flex items-center gap-2 flex-wrap text-[11px]">
                        <button
                          type="button"
                          onClick={() => handleToggleAlert(contact.id)}
                          className={`px-2.5 py-1 rounded-lg border flex items-center gap-1.5 transition ${
                            contact.hasAlertPermission
                              ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300'
                              : 'bg-stone-100 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-500'
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${contact.hasAlertPermission ? 'bg-emerald-500' : 'bg-stone-400'}`}></span>
                          {contact.hasAlertPermission ? 'SOS Alerts Enabled' : 'Alerts Paused'}
                        </button>

                        <button
                          type="button"
                          onClick={() => handleSendTestAlert(contact)}
                          className="px-2.5 py-1 rounded-lg border border-violet-200 dark:border-violet-800/80 bg-violet-50/60 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 hover:bg-violet-100 transition flex items-center gap-1"
                        >
                          <FaPaperPlane className="text-[9px]" /> Test Alert
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      {!contact.isPrimary && (
                        <button
                          onClick={() => handleSetPrimary(contact.id)}
                          title="Set as Primary Emergency Contact"
                          className="p-2 text-stone-400 hover:text-amber-500 rounded-xl hover:bg-violet-50 dark:hover:bg-violet-900/40 transition"
                        >
                          <FaRegStar />
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteContact(contact.id)}
                        title="Remove Contact"
                        className="p-2 text-stone-400 hover:text-red-500 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/40 transition"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Add contact toggle */}
          {!showAddForm && contacts.length < 5 && (
            <button
              onClick={() => setShowAddForm(true)}
              className="w-full py-2.5 rounded-2xl border-2 border-dashed border-violet-300 dark:border-violet-800/60 text-violet-700 dark:text-violet-300 text-xs font-semibold hover:bg-violet-50 dark:hover:bg-violet-950/30 transition flex items-center justify-center gap-2"
            >
              <FaPlus /> Add Another Trusted Contact ({5 - contacts.length} remaining)
            </button>
          )}

          {/* Add contact form */}
          {showAddForm && (
            <form onSubmit={handleAddContact} className="p-4 rounded-2xl border border-violet-300 dark:border-violet-800 bg-violet-50/40 dark:bg-violet-950/40 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-violet-800 dark:text-violet-200">
                  New Emergency Contact
                </h4>
                <button 
                  type="button" 
                  onClick={() => setShowAddForm(false)}
                  className="text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 text-xs"
                >
                  Cancel
                </button>
              </div>

              {formError && (
                <div className="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-300 text-xs flex items-center gap-1.5">
                  <FaExclamationCircle className="flex-shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-stone-700 dark:text-violet-200 mb-1">
                    Contact Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rajesh Sahu"
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#1C1233] border border-violet-200 dark:border-violet-800 text-xs text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-700 dark:text-violet-200 mb-1">
                    Relationship *
                  </label>
                  <select
                    value={relationship}
                    onChange={(e) => setRelationship(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#1C1233] border border-violet-200 dark:border-violet-800 text-xs text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                  >
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Brother / Sister">Brother / Sister</option>
                    <option value="Spouse">Spouse</option>
                    <option value="Friend">Friend</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-stone-700 dark:text-violet-200 mb-1">
                    Mobile Number (10-digit India) *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-xs font-mono text-stone-400">+91</span>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="98765 43210"
                      maxLength={14}
                      className="w-full pl-11 pr-3 py-2 rounded-xl bg-white dark:bg-[#1C1233] border border-violet-200 dark:border-violet-800 text-xs text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-700 dark:text-violet-200 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contact@gmail.com"
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#1C1233] border border-violet-200 dark:border-violet-800 text-xs text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4 pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-xs text-stone-700 dark:text-violet-200">
                  <input
                    type="checkbox"
                    checked={hasAlertPermission}
                    onChange={(e) => setHasAlertPermission(e.target.checked)}
                    className="rounded border-violet-300 text-violet-600 focus:ring-violet-500"
                  />
                  <span>Authorize SMS / SOS alerts</span>
                </label>

                {contacts.length > 0 && (
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-stone-700 dark:text-violet-200">
                    <input
                      type="checkbox"
                      checked={isPrimary}
                      onChange={(e) => setIsPrimary(e.target.checked)}
                      className="rounded border-violet-300 text-violet-600 focus:ring-violet-500"
                    />
                    <span>Set as Primary Contact</span>
                  </label>
                )}
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-3 py-1.5 rounded-xl border border-stone-200 dark:border-violet-800 text-stone-600 dark:text-violet-300 text-xs hover:bg-stone-100 dark:hover:bg-violet-900/30 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold shadow-md shadow-violet-600/30 transition"
                >
                  Save Contact
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-violet-100 dark:border-violet-900/40 bg-violet-50/50 dark:bg-violet-950/20 flex items-center justify-between">
          <p className="text-[11px] text-stone-500 dark:text-violet-300">
            Contacts are stored locally in your browser and used only for your travel safety.
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold shadow-lg shadow-violet-600/25 transition"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
