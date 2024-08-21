import { useState, useEffect } from "react";

export default function ContactList({  selectedContactId , setSelectedContactId}) {
    const [contact, setContact] = useState({});
    useEffect(() => {
      async function fetchContact() {
        try {
          const response = await fetch(
            `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
          );
          const result = await response.json();
          setContact(result);
        //   console.log(contact);
        } catch (error) {
          console.error(error);
        }
      }
      fetchContact();
  }, [])
  return (
    <>
    <h3>{contact.name}</h3>
    <h5>{contact.email}</h5>
    <h5>{contact.phone}</h5>
    <button  onClick={() => {setSelectedContactId(null)}}>Back to Contacts</button>
    </>
  );
};