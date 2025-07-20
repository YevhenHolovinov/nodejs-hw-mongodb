import { Contact } from '../models/contacts.js';

export function getContacts() {
  return Contact.find();
}

export function getContact(contactId) {
  return Contact.findById(contactId);
}

export function createContact(payload) {
  return Contact.create(payload);
}

export function deleteContac(contactId) {
  return Contact.findByIdAndDelete(contactId);
}

export function updateContact(contactId, payload) {
  return Contact.findByIdAndUpdate(contactId, payload, { new: true });
}
