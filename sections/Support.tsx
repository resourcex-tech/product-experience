import { useState, useEffect, useRef } from "react";
import SectionGrid from "./SectionGrid";
import ClassNames from "@/components/ClassNames";
import Ticket from "@/components/Ticket";
import Modal from "@/components/Modal";

const supportTickets = [
  {
    ticketNumber: "CS1001",
    customerName: "John Doe",
    issue: "Product not working",
    requestDate: "2023-09-26T10:30:00Z",
    comments: [
      {
        author: "Support Agent 1",
        userType: "Support Agent",
        text: "Thank you for reaching out to us. We apologize for the inconvenience. Could you please provide more details about the issue?",
      },
      {
        author: "John Doe",
        userType: "Customer",
        text: "Sure, the product freezes when I try to open it.",
      },
      {
        author: "Support Agent 1",
        userType: "Support Agent",
        text: "Got it, we'll investigate the issue and get back to you with a solution.",
      },
    ],
  },
  {
    ticketNumber: "CS1002",
    customerName: "Alice Smith",
    issue: "Billing discrepancy",
    requestDate: "2023-09-25T14:45:00Z",
    comments: [
      {
        author: "Support Agent 2",
        userType: "Support Agent",
        text: "Hello Alice, I see that there is a billing discrepancy on your account. Let's resolve this issue for you. Can you please provide the invoice number in question?",
      },
      {
        author: "Alice Smith",
        userType: "Customer",
        text: "The invoice number is INV-2023-001.",
      },
      {
        author: "Support Agent 2",
        userType: "Support Agent",
        text: "Thank you, Alice. We'll investigate this invoice and update you on the resolution.",
      },
    ],
  },
  {
    ticketNumber: "CS1003",
    customerName: "Bob Johnson",
    issue: "Password reset request",
    requestDate: "2023-09-24T08:15:00Z",
    comments: [
      {
        author: "Support Agent 3",
        userType: "Support Agent",
        text: "Hi Bob, I received your password reset request. To proceed, could you please verify your email address associated with your account?",
      },
      {
        author: "Bob Johnson",
        userType: "Customer",
        text: "My email is bob@example.com.",
      },
      {
        author: "Support Agent 3",
        userType: "Support Agent",
        text: "Thank you, Bob. I have sent a password reset link to your email address. Please check your inbox.",
      },
    ],
  },
  {
    ticketNumber: "CS1004",
    customerName: "Emily Davis",
    issue: "Shipping delay",
    requestDate: "2023-09-23T16:20:00Z",
    comments: [
      {
        author: "Support Agent 4",
        userType: "Support Agent",
        text: "Hello Emily, I apologize for the delay in your shipment. Can you please provide your order number so that we can track it for you?",
      },
      {
        author: "Emily Davis",
        userType: "Customer",
        text: "My order number is ORD-4567.",
      },
      {
        author: "Support Agent 4",
        userType: "Support Agent",
        text: "Thank you, Emily. We'll investigate the shipment status and provide you with an update soon.",
      },
    ],
  },
];

export default function Support() {
  const [open, setOpen] = useState(false);

  return (
    <SectionGrid center row>
      <div className="relative mb-4">
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Customer Support
        </h2>
        <div
          className="absolute right-0 -top-2 text-base px-3 rounded-lg flex items-center justify-center hover:bg-blue-100 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <span className="py-2">Ask a Question</span>
          <i className="fi fi-rr-angle-small-right text-2xl ml-2 leading-[0]" />
        </div>
      </div>
      <div className="flex flex-col">
        {supportTickets.map((ticket, index) => (
          <Ticket ticket={ticket} key={index} />
        ))}
      </div>
      <Modal open={open} setOpen={setOpen} />
    </SectionGrid>
  );
}
