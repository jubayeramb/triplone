import { Button } from "@triplone/ui/components/button";
import { Card } from "@triplone/ui/components/card";

interface AccountActionsCardProps {
  onExportData?: () => void;
  onDeleteAccount?: () => void;
}

export function AccountActionsCard({ onExportData, onDeleteAccount }: AccountActionsCardProps) {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold text-teal-600 mb-6">Account Actions</h2>

      <div className="space-y-4">
        {/* Export Account Data */}
        <div className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-900">Export Account Data</h3>
            <p className="text-xs text-gray-600">Download a copy of your account data</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="border-yellow-600 text-yellow-600 hover:bg-yellow-50"
            onClick={onExportData}
          >
            Export data
          </Button>
        </div>

        {/* Delete Account */}
        <div className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-900">Delete Account</h3>
            <p className="text-xs text-gray-600">Permanently delete your account and all data</p>
          </div>
          <Button variant="destructive" size="sm" onClick={onDeleteAccount}>
            Delete Account
          </Button>
        </div>
      </div>
    </Card>
  );
}
