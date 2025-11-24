import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import FadeIn from './common/FadeIn';

const ContactRow = ({ role, name, phone }) => (
  <div className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
    <div className="text-left">
      <span className="text-sm text-gray-500 mr-2">{role}</span>
      <span className="font-medium text-gray-800">{name}</span>
    </div>
    <div className="flex space-x-3">
      <a href={`tel:${phone}`} className="text-gray-600 hover:text-accent">
        <Phone size={18} />
      </a>
      <a href={`sms:${phone}`} className="text-gray-600 hover:text-accent">
        <MessageCircle size={18} />
      </a>
    </div>
  </div>
);

const Contact = () => (
  <section className="py-16 px-6 bg-white">
    <FadeIn>
      <h3 className="text-xl font-serif text-center mb-10 text-accent">
        C O N T A C T
      </h3>
      <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-lg shadow-sm">
        <h4 className="text-center font-bold mb-4 text-gray-700">신랑측</h4>
        <ContactRow role="신랑" name="차성범" phone="010-0000-0000" />
        <ContactRow role="아버지" name="차아빠" phone="010-0000-0000" />
        <ContactRow role="어머니" name="이엄마" phone="010-0000-0000" />

        <div className="h-8" />

        <h4 className="text-center font-bold mb-4 text-gray-700">신부측</h4>
        <ContactRow role="신부" name="조주영" phone="010-0000-0000" />
        <ContactRow role="아버지" name="조아빠" phone="010-0000-0000" />
        <ContactRow role="어머니" name="박엄마" phone="010-0000-0000" />
      </div>
    </FadeIn>
  </section>
);

export default Contact;
