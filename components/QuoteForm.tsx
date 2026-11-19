import { submitQuote } from "@/lib/actions";
import { WhatsAppIcon } from "./icons";

type Props = {
  idPrefix: string;
  label?: string;
};

const labelCls = "mb-1.5 block text-sm font-semibold text-black";

export function QuoteForm({ idPrefix, label = "Free moving quote form" }: Props) {
  return (
    <form action={submitQuote} aria-label={label} className="grid gap-4 text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${idPrefix}-name`} className={labelCls}>
            Name
          </label>
          <input
            id={`${idPrefix}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={80}
            className="field"
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-phone`} className={labelCls}>
            Phone Number
          </label>
          <input
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            maxLength={30}
            className="field"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${idPrefix}-from`} className={labelCls}>
            Moving From
          </label>
          <input
            id={`${idPrefix}-from`}
            name="movingFrom"
            type="text"
            autoComplete="off"
            required
            maxLength={120}
            placeholder="e.g. Dubai Marina"
            className="field"
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-to`} className={labelCls}>
            Moving To
          </label>
          <input
            id={`${idPrefix}-to`}
            name="movingTo"
            type="text"
            autoComplete="off"
            required
            maxLength={120}
            placeholder="e.g. Business Bay"
            className="field"
          />
        </div>
      </div>
      <div>
        <label htmlFor={`${idPrefix}-message`} className={labelCls}>
          Message
        </label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          rows={4}
          maxLength={600}
          className="field"
        />
      </div>
      <button type="submit" className="btn btn-primary btn-lg w-full">
        <WhatsAppIcon className="size-5" />
        Get a Free Quote
      </button>
      <p className="text-center text-sm text-muted">
        Your details open in WhatsApp so our team can reply to you directly.
      </p>
    </form>
  );
}
