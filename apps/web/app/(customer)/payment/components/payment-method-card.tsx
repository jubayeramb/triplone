import { Card } from "@triplone/ui/components/card";
import { Badge } from "@triplone/ui/components/badge";
import Image from "next/image";
import type { PaymentMethod } from "../lib";
import { PaymentMethodActions } from "./payment-method-actions";

interface PaymentMethodCardProps {
  method: PaymentMethod;
  onSetDefault?: (methodId: string) => void;
  onEdit?: (methodId: string) => void;
  onDelete?: (methodId: string) => void;
}

export function PaymentMethodCard({
  method,
  onSetDefault,
  onEdit,
  onDelete,
}: PaymentMethodCardProps) {
  return (
    <Card className={`p-6 ${method.isDefault ? "border-2 border-teal-500" : ""}`}>
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
        <PaymentMethodActions
          methodId={method.id}
          isDefault={method.isDefault}
          onSetDefault={onSetDefault}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </div>
    </Card>
  );
}
