import { getContacts, getContact } from '../services/contacts.services.js';

export async function getContactsControllers(req, res) {
  const contacts = await getContacts();

  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
}

export async function getContactControllers(req, res) {
  const contact = await getContact(req.params.id);
  console.log(contact);
  if (contact === null) {
    return res
      .status(404)
      .json({ status: 404, message: 'Contact not found', data: null });
  }

  res.json({
    status: 200,
    message: `Successfully found contact with id ${req.params.id}!`,
    data: contact,
  });
}
