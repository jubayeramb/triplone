import { Button } from "@triplone/ui/components/button";
import { Card } from "@triplone/ui/components/card";
import { Badge } from "@triplone/ui/components/badge";
import { CreditCard, Edit, Trash2, ShieldCheck } from "lucide-react";
import Image from "next/image";

// Mock data for payment methods
const paymentMethods = [
  {
    id: "1",
    type: "visa",
    name: "Visa ending in 4242",
    cardHolder: "Ahmed Rahman",
    expiryDate: "Expires 12/2025",
    isDefault: true,
    icon: "💳",
    color: "blue",
  },
  {
    id: "2",
    type: "bkash",
    name: "bKash",
    accountNumber: "+880-1711-123456",
    isDefault: false,
    icon: "📱",
    color: "pink",
  },
  {
    id: "3",
    type: "nagad",
    name: "Nagad",
    accountNumber: "+880-1811-654321",
    isDefault: false,
    icon: "🟠",
    color: "orange",
  },
];

export default function PaymentMethodsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      {/* Header */}
      <div className="flex items-center justify-between pt-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Payment Methods</h1>
          <p className="text-sm text-gray-500">Manage your payment methods for quick booking</p>
        </div>
      </div>

      {/* Payment Methods List */}
      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <Card
            key={method.id}
            className={`p-6 ${method.isDefault ? "border-2 border-teal-500" : ""}`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`h-12 w-12 rounded-lg flex items-center justify-center ${
                    method.type === "visa"
                      ? "bg-blue-100"
                      : method.type === "bkash"
                        ? "bg-pink-100"
                        : "bg-orange-100"
                  }`}
                >
                  <span className="text-2xl">{method.icon}</span>
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900">{method.name}</h3>
                    {method.isDefault && (
                      <Badge variant="secondary" className="bg-teal-100 text-teal-700 border-0">
                        Standard
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">
                    {method.cardHolder && `${method.cardHolder} • `}
                    {method.expiryDate || method.accountNumber}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                {!method.isDefault && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Set as default
                  </Button>
                )}
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Edit className="h-4 w-4 text-gray-600" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            </div>
          </Card>
        ))}

        {/* Security Information Card */}
        <Card className="p-6 bg-gray-50 border-gray-200">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="h-6 w-6 text-teal-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Your payment information is secure
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We use industry-standard encryption to protect your payment details. Your card
                information is never stored on our servers and is processed securely through our
                payment partners.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
