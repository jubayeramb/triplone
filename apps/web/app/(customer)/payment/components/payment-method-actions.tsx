"use client";
import { Button } from "@triplone/ui/components/button";
import { Edit, Trash2 } from "lucide-react";

interface PaymentMethodActionsProps {
  methodId: string;
  isDefault: boolean;
  onSetDefault?: (methodId: string) => void;
  onEdit?: (methodId: string) => void;
  onDelete?: (methodId: string) => void;
}

export function PaymentMethodActions({
  methodId,
  isDefault,
  onSetDefault,
  onEdit,
  onDelete,
}: PaymentMethodActionsProps) {
  return (
    <div className="flex items-center gap-2">
      {!isDefault && (
        <Button
          variant="outline"
          size="sm"
          className="text-sm text-gray-600 hover:text-gray-900"
          onClick={() => onSetDefault?.(methodId)}
        >
          Set as default
        </Button>
      )}
      <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => onEdit?.(methodId)}>
        <Edit className="h-4 w-4 text-gray-600" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="h-8 w-8 p-0"
        onClick={() => onDelete?.(methodId)}
      >
        <Trash2 className="h-4 w-4 text-red-500" />
      </Button>
    </div>
  );
}
