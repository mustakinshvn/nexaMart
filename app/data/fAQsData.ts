import React from "react";
import { CreditCard, Truck, RotateCcw, Package, Shield } from "lucide-react";

 type FAQItem = {
  question: string;
  answer: string;
}
type FAQCategory ={
   title: string;
   icon: React.ElementType;
   items: FAQItem[];
 }
 
 export const faqsData: FAQCategory[] = [
    {
      title: "Orders & Payment",
      icon: CreditCard,
      items: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and Shop Pay. All transactions are secured with SSL encryption to protect your payment information.",
        },
        {
          question: "Can I modify or cancel my order?",
          answer:
            "You can modify or cancel your order within 1 hour of placing it. After this time, your order enters our processing system. Please contact our customer service team immediately if you need to make changes.",
        },
        {
          question: "Do you offer price matching?",
          answer:
            "Yes! If you find a lower price on an identical item from a qualified competitor, we'll match it. Contact us within 7 days of purchase with proof of the competitor's price.",
        },
      ],
    },
    {
      title: "Shipping & Delivery",
      icon: Truck,
      items: [
        {
          question: "How long does shipping take?",
          answer:
            "Standard shipping takes 5-7 business days. Express shipping (2-3 days) and overnight shipping options are available at checkout. International orders typically arrive within 10-15 business days.",
        },
        {
          question: "Do you ship internationally?",
          answer:
            "Yes, we ship to over 100 countries worldwide. International shipping costs and delivery times vary by destination. Customs fees and import duties may apply and are the responsibility of the customer.",
        },
        {
          question: "How can I track my order?",
          answer:
            "Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account and visiting the 'Order History' section.",
        },
      ],
    },
    {
      title: "Returns & Exchanges",
      icon: RotateCcw,
      items: [
        {
          question: "What is your return policy?",
          answer:
            "We offer a 30-day return policy on most items. Products must be unused, in original packaging, and with all tags attached. Some items like personalized products or intimate apparel are final sale.",
        },
        {
          question: "How do I initiate a return?",
          answer:
            "Log into your account, go to 'Order History', select the order, and click 'Return Items'. Follow the prompts to print your prepaid return label. Drop off the package at any authorized shipping location.",
        },
        {
          question: "When will I receive my refund?",
          answer:
            "Refunds are processed within 5-7 business days after we receive your return. The credit will appear on your original payment method within 3-5 business days after processing.",
        },
      ],
    },
    {
      title: "Products & Stock",
      icon: Package,
      items: [
        {
          question: "How do I know if an item is in stock?",
          answer:
            "Product availability is shown on each product page. If an item is out of stock, you can sign up for email notifications to be alerted when it's back in stock.",
        },
        {
          question: "Do you restock sold-out items?",
          answer:
            "Most items are restocked regularly. However, some seasonal or limited edition items may not be restocked. Sign up for restock notifications on the product page to stay informed.",
        },
        {
          question: "Are the product images accurate?",
          answer:
            "We strive to display products as accurately as possible. However, colors may vary slightly due to different screen settings. Check the product description for detailed specifications.",
        },
      ],
    },
    {
      title: "Account & Security",
      icon: Shield,
      items: [
        {
          question: "Is my personal information secure?",
          answer:
            "Yes, we use industry-standard SSL encryption to protect your data. We never share your personal information with third parties without your consent. Review our Privacy Policy for more details.",
        },
        {
          question: "How do I reset my password?",
          answer:
            "Click 'Forgot Password' on the login page and enter your email address. You'll receive a password reset link within a few minutes. If you don't see it, check your spam folder.",
        },
        {
          question: "Can I save items for later?",
          answer:
            "Yes! You can add items to your Wishlist by clicking the heart icon on any product page. Your Wishlist is saved to your account and accessible from any device.",
        },
      ],
    },
  ];