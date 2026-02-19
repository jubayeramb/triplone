"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@triplone/ui/components/card";
import { Input } from "@triplone/ui/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@triplone/ui/components/select";
import { Badge } from "@triplone/ui/components/badge";
import { Avatar } from "@triplone/ui/components/avatar";
import {
  TrendingUp,
  Wallet,
  Clock,
  Percent,
  Calendar,
  CreditCard,
  Circle,
} from "lucide-react";

type PaymentStatus = "confirmed" | "pending" | "failed";
type PaymentMethod = "bkash" | "card" | "nagad" | "bank-transfer";

interface Transaction {
  id: string;
  customerName: string;
  tourName: string;
  amount: number;
  netAmount: number;
  status: PaymentStatus;
  method: PaymentMethod;
  date: string;
  transactionId: string;
  avatar?: string;
}

export default function PaymentManagementPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [methodFilter, setMethodFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const stats = [
    {
      title: "Total Revenue",
      value: "৳36,000",
      icon: TrendingUp,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-500",
    },
    {
      title: "Net Revenue",
      value: "৳34,200",
      icon: Wallet,
      bgColor: "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      title: "Pending",
      value: "৳12,000",
      icon: Clock,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      title: "Commission",
      value: "৳1,800",
      icon: Percent,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500",
    },
  ];

  const transactions: Transaction[] = [
    {
      id: "1",
      customerName: "Ahmed Rahman",
      tourName: "Cox's Bazar Beach Paradise",
      amount: 14999,
      netAmount: 8075,
      status: "confirmed",
      method: "bkash",
      date: "2024-02-15",
      transactionId: "TXN-BK-789012",
    },
    {
      id: "2",
      customerName: "Fatima Khan",
      tourName: "Sundarbans Wildlife Adventure",
      amount: 12000,
      netAmount: 11400,
      status: "pending",
      method: "card",
      date: "2024-02-14",
      transactionId: "TXN-CD-456789",
    },
    {
      id: "3",
      customerName: "Mohammad Ali",
      tourName: "Sylhet Tea Garden Tour",
      amount: 18000,
      netAmount: 17100,
      status: "confirmed",
      method: "nagad",
      date: "2024-02-13",
      transactionId: "TXN-NG-123456",
    },
    {
      id: "4",
      customerName: "Rashida Begum",
      tourName: "Bandarban Hill Trek",
      amount: 115000,
      netAmount: 0,
      status: "failed",
      method: "bank-transfer",
      date: "2024-02-12",
      transactionId: "TXN-BT-987654",
    },
  ];

  const getStatusBadge = (status: PaymentStatus) => {
    const statusConfig = {
      confirmed: {
        label: "Confirmed",
        className: "bg-green-100 text-green-700 hover:bg-green-100",
        icon: "✓",
      },
      pending: {
        label: "Pending",
        className: "bg-yellow-100 text-yellow-700 hover:bg-yellow-100",
        icon: "⟳",
      },
      failed: {
        label: "Failed",
        className: "bg-red-100 text-red-700 hover:bg-red-100",
        icon: "✗",
      },
    };

    const config = statusConfig[status];
    return (
      <Badge className={config.className}>
        <span className="mr-1">{config.icon}</span>
        {config.label}
      </Badge>
    );
  };

  const getMethodIcon = (method: PaymentMethod) => {
    const icons = {
      bkash: (
        <div className="flex items-center gap-2 text-pink-600">
          <Circle className="h-4 w-4 fill-pink-600" />
          <span className="text-sm font-medium">bKash</span>
        </div>
      ),
      card: (
        <div className="flex items-center gap-2 text-blue-600">
          <CreditCard className="h-4 w-4" />
          <span className="text-sm font-medium">Card</span>
        </div>
      ),
      nagad: (
        <div className="flex items-center gap-2 text-orange-600">
          <Circle className="h-4 w-4 fill-orange-600" />
          <span className="text-sm font-medium">Nagad</span>
        </div>
      ),
      "bank-transfer": (
        <div className="flex items-center gap-2 text-gray-600">
          <Wallet className="h-4 w-4" />
          <span className="text-sm font-medium">Bank Transfer</span>
        </div>
      ),
    };

    return icons[method];
  };

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      searchQuery === "" ||
      transaction.customerName
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      transaction.tourName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.transactionId
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    const matchesMethod =
      methodFilter === "all" || transaction.method === methodFilter;

    const matchesStatus =
      statusFilter === "all" || transaction.status === statusFilter;

    return matchesSearch && matchesMethod && matchesStatus;
  });

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-blue-600">Payment Management</h1>
        <p className="text-muted-foreground mt-1">
          Track all your transactions and revenue
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="relative overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">{stat.title}</p>
                  <p className="mt-2 text-3xl font-bold">{stat.value}</p>
                </div>
                <div className={`${stat.bgColor} rounded-lg p-3`}>
                  <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex-1">
          <Input
            placeholder="Search by customers, tours, or transaction id..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
        <Select value={methodFilter} onValueChange={setMethodFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="All Methods" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Methods</SelectItem>
            <SelectItem value="bkash">bKash</SelectItem>
            <SelectItem value="card">Card</SelectItem>
            <SelectItem value="nagad">Nagad</SelectItem>
            <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="All Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="confirmed">Confirmed</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Transactions List */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Transactions</CardTitle>
          <CardDescription>
            All payment transactions and their status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="hover:bg-muted/50 flex flex-col gap-4 rounded-lg border p-4 transition-colors"
              >
                {/* Row 1: Customer Info and Amount */}
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10">
                      <div className="flex h-full w-full items-center justify-center bg-blue-500 font-semibold text-white">
                        {transaction.customerName.charAt(0)}
                      </div>
                    </Avatar>
                    <div>
                      <p className="font-semibold">
                        {transaction.customerName}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {transaction.tourName}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold">
                      ৳{transaction.amount.toLocaleString()}
                    </p>
                    {getStatusBadge(transaction.status)}
                  </div>
                </div>

                {/* Row 2: Payment Details */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-6">
                    {getMethodIcon(transaction.method)}
                    <div className="text-muted-foreground flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{transaction.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-muted-foreground text-xs">
                        Transaction ID
                      </p>
                      <p className="font-mono text-sm">
                        {transaction.transactionId}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-muted-foreground text-xs">
                        Net Amount
                      </p>
                      <p className="font-semibold text-green-600">
                        {transaction.status === "failed"
                          ? "৳0"
                          : `৳${transaction.netAmount.toLocaleString()}`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {filteredTransactions.length === 0 && (
              <div className="text-muted-foreground py-12 text-center">
                <p>No transactions found matching your filters.</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
