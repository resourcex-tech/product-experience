import { useState } from "react";
import ClassNames from "./ClassNames";
import FormatDate from "./FormatDate";

export default function Ticket({ ticket }: any) {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full">
      <div
        className="border-b mb-3 p-5 bg-white shadow rounded-lg flex justify-between cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <div>
          <div className="text-xs">{ticket.customerName}</div>
          <h3 className="text-base font-medium">{ticket.issue}</h3>
          <div className="text-xs">{FormatDate(ticket.requestDate)}</div>
        </div>
        <div>
          <i className="fi fi-rr-angle-small-down text-3xl"></i>
        </div>
      </div>
      {show && (
        <div className="flex gap-4 flex-col p-5">
          {ticket.comments.map((comment: any, index: number) => (
            <div
              className={ClassNames(
                "flex gap-3 justify-end",
                comment.userType === "Support Agent"
                  ? "flex-row"
                  : "flex-row-reverse"
              )}
              key={index}
            >
              <div className="inline-block bg-gray-200 px-3 py-5 rounded-lg">
                {comment.text}
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
