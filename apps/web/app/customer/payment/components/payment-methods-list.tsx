import type { PaymentMethod } from "../lib";
import { PaymentMethodCard } from "./payment-method-card";
import { SecurityInfoCard } from "./security-info-card";

interface PaymentMethodsListProps {
  methods: PaymentMethod[];
}

export function PaymentMethodsList({ methods }: PaymentMethodsListProps) {
  return (
    <div className="space-y-4">
      {methods.map((method) => (
        <PaymentMethodCard key={method.id} method={method} />
      ))}
      <SecurityInfoCard />
    </div>
  );
}
