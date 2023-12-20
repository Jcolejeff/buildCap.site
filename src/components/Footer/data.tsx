export const FooterLinksData = [
   {
      id: "about.md",
      slug: "about",
      body: "",
      collection: "footerLinks",
      data: {
         category: "Company",
         links: [
            {
               title: "About Us",
               url: "/about-us",
            },

            {
               title: "Privacy Policy",
               url: "/privacy",
            },
            {
               title: "Terms and Conditions",
               url: "/terms",
            },
         ],
      },
      render: null,
   },

   {
      id: "socials.md",
      slug: "solutions",
      body: "",
      collection: "footerLinks",
      data: {
         category: "Products",
         links: [
            {
               title: "Material Financing",
               url: "#",
               soon: false,
            },
            {
               title: "Advance Pay",
               url: "#",
               soon: true,
            },
            {
               title: "Invoice discounting",
               url: "#",
               soon: true,
            },
         ],
      },
      render: null,
   },
   {
      id: "support.md",
      slug: "support",
      body: "",
      collection: "footerLinks",
      data: {
         category: "support",
         links: [
            {
               title: "Contact us",
               url: "/contact-us",
            },

            // {
            //    title: "FAQs",
            //    url: "#faq",
            // },
            {
               title: "Support@buildCAP.com",
               url: "mailto:support@joi.com",
            },
         ],
      },
      render: null,
   },
];
