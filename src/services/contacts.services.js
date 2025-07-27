import { Contact } from '../models/contacts.js';

export async function getContacts(page, perPage, sortBy, sortOrder) {
  const skip = page > 0 ? (page - 1) * perPage : 0;

  const contactsQuery = Contact.find();

  const [total, contacts] = await Promise.all([
    Contact.find().countDocuments(),
    contactsQuery
      .sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(perPage),
  ]);

  const totalPages = Math.ceil(total / perPage);

  return {
    contacts,
    total,
    page,
    perPage,
    totalPages,
    hasNextPage: totalPages > page,
    hasPreviousPage: page > 1,
  };
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
