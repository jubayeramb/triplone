import { Card } from "@triplone/ui/components/card";
import { ShieldCheck } from "lucide-react";

export function SecurityInfoCard() {
  return (
    <Card className="p-6 bg-white border-gray-200">
      <div className="flex items-start gap-4">
        <div className="rounded-xl flex items-center justify-center flex-shrink-0 h-full my-auto">
          <ShieldCheck className="h-[40px] w-[40px] text-green-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">Your payment information is secure</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            We use industry-standard encryption to protect your payment details. Your card
            information is never stored on our servers and is processed securely through our payment
            partners.
          </p>
        </div>
      </div>
    </Card>
  );
}
