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
    image: "/payments/visa.png",
    color: "blue",
  },
  {
    id: "2",
    type: "bkash",
    name: "bKash",
    accountNumber: "+880-1711-123456",
    isDefault: false,
    image: "/payments/bkash.png",
    color: "pink",
  },
  {
    id: "3",
    type: "nagad",
    name: "Nagad",
    accountNumber: "+880-1811-654321",
    isDefault: false,
    image: "/payments/nagad.png",
    color: "orange",
  },
];

export default function PaymentMethodsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-center justify-between pt-4">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">Payment Methods</h1>
            <p className="text-gray-500 text-sm font-medium">
              Manage your payment methods for quick booking
            </p>
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
                  {/* Payment Method Icon */}
                  <div className="h-14 w-14 rounded-xl flex items-center justify-center p-2">
                    <Image
                      src={method.image}
                      alt={method.name}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
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
          <Card className="p-6 bg-white border-gray-200">
            <div className="flex items-start gap-4">
              <div className="rounded-xl flex items-center justify-center flex-shrink-0 h-full my-auto">
                <ShieldCheck className="h-[40px] w-[40px] text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Your payment information is secure
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  We use industry-standard encryption to protect your payment details. Your card
                  information is never stored on our servers and is processed securely through our
                  payment partners.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
