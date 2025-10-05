import { Button } from "@triplone/ui/components/button";
import { Card } from "@triplone/ui/components/card";
import { Badge } from "@triplone/ui/components/badge";
import { Edit, Trash2 } from "lucide-react";
import Image from "next/image";
import type { PaymentMethod } from "../lib";

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
        <div className="flex items-center gap-2">
          {!method.isDefault && (
            <Button
              variant="outline"
              size="sm"
              className="text-sm text-gray-600 hover:text-gray-900"
              onClick={() => onSetDefault?.(method.id)}
            >
              Set as default
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => onEdit?.(method.id)}
          >
            <Edit className="h-4 w-4 text-gray-600" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => onDelete?.(method.id)}
          >
            <Trash2 className="h-4 w-4 text-red-500" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
