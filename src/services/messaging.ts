export const sendMessage = {
  email: (data: {
    name: string;
    mobile: string;
    email: string;
    message: string;
    contactPerson?: string;
  }) => {
    const subject = encodeURIComponent(`Contact from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nMobile: ${data.mobile}\nEmail: ${data.email}\nContact Person: ${data.contactPerson}\n\nMessage: ${data.message}`
    );
    window.location.href = `mailto:umangthakkar005@gmail.com?subject=${subject}&body=${body}`;
  },

  whatsapp: (data: {
    name: string;
    mobile: string;
    email: string;
    message: string;
    contactPerson?: string;
  }) => {
    const message = encodeURIComponent(
      `Name: ${data.name}\nMobile: ${data.mobile}\nEmail: ${data.email}\nContact Person: ${data.contactPerson}\n\nMessage: ${data.message}`
    );
    window.open(`https://wa.me/919426154668?text=${message}`, '_blank');
  }
};