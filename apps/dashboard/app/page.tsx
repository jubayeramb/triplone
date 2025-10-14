import { Button } from "@triplone/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@triplone/ui/components/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@triplone/ui/components/avatar";
import { Badge } from "@triplone/ui/components/badge";
import {
  MapPin,
  Calendar,
  Users,
  BarChart3,
  TrendingUp,
  Star,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Good Morning, Adventure Bangladesh!
        </h1>
        <p className="text-muted-foreground">
          Ready to create amazing travel experiences today?
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-blue-100 bg-blue-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Bookings
            </CardTitle>
            <Calendar className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="mt-1 flex items-center gap-1 text-xs text-green-600">
              <TrendingUp className="h-3 w-3" />
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-green-100 bg-green-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Tours</CardTitle>
            <MapPin className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="mt-1 flex items-center gap-1 text-xs text-green-600">
              <TrendingUp className="h-3 w-3" />
              +3 from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-orange-100 bg-orange-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <BarChart3 className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">৳2,45,000</div>
            <p className="mt-1 flex items-center gap-1 text-xs text-green-600">
              <TrendingUp className="h-3 w-3" />
              +18% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-purple-100 bg-purple-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Customer Rating
            </CardTitle>
            <Star className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8</div>
            <p className="mt-1 flex items-center gap-1 text-xs text-green-600">
              <TrendingUp className="h-3 w-3" />
              +0.3 from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Recent Bookings */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
            <CardDescription>
              Latest bookings from your customers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Booking 1 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/avatars/user1.jpg" />
                    <AvatarFallback>AR</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Ahmed Rahman</p>
                    <p className="text-muted-foreground text-xs">
                      Cox's Bazar Beach Paradise
                    </p>
                    <p className="text-muted-foreground text-xs">2024-02-15</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">৳4,999</p>
                  <Badge variant="default" className="text-xs">
                    confirmed
                  </Badge>
                </div>
              </div>

              {/* Booking 2 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/avatars/user2.jpg" />
                    <AvatarFallback>FK</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Fatima Khan</p>
                    <p className="text-muted-foreground text-xs">
                      Sundarbans Wildlife Adventure
                    </p>
                    <p className="text-muted-foreground text-xs">2024-02-14</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">৳5,999</p>
                  <Badge variant="secondary" className="text-xs">
                    pending
                  </Badge>
                </div>
              </div>

              {/* Booking 3 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/avatars/user3.jpg" />
                    <AvatarFallback>MA</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Mohammad Ali</p>
                    <p className="text-muted-foreground text-xs">
                      Sylhet Tea Garden Tour
                    </p>
                    <p className="text-muted-foreground text-xs">2024-02-13</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">৳5,999</p>
                  <Badge variant="default" className="text-xs">
                    confirmed
                  </Badge>
                </div>
              </div>
            </div>
            <Button variant="link" className="mt-4 w-full">
              View All Bookings
            </Button>
          </CardContent>
        </Card>

        {/* Popular Tours */}
        <Card>
          <CardHeader>
            <CardTitle>Popular Tours</CardTitle>
            <CardDescription>
              Your best performing tour packages
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Tour 1 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-blue-400 to-blue-600">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      Cox's Bazar Beach Paradise
                    </p>
                    <p className="text-muted-foreground flex items-center gap-1 text-xs">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      4.7 · 48 bookings
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">৳3,82,500</p>
                  <Button variant="ghost" size="sm" className="h-6 text-xs">
                    View
                  </Button>
                </div>
              </div>

              {/* Tour 2 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-green-400 to-green-600">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      Sundarbans Wildlife Adventure
                    </p>
                    <p className="text-muted-foreground flex items-center gap-1 text-xs">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      4.5 · 28 bookings
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">৳3,36,000</p>
                  <Button variant="ghost" size="sm" className="h-6 text-xs">
                    View
                  </Button>
                </div>
              </div>

              {/* Tour 3 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-orange-400 to-orange-600">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      Sylhet Tea Garden Tour
                    </p>
                    <p className="text-muted-foreground flex items-center gap-1 text-xs">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      4.9 · 32 bookings
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">৳5,76,000</p>
                  <Button variant="ghost" size="sm" className="h-6 text-xs">
                    View
                  </Button>
                </div>
              </div>
            </div>
            <Button variant="link" className="mt-4 w-full">
              Manage Tour
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <CardHeader>
          <CardTitle className="text-white">Quick Actions</CardTitle>
          <CardDescription className="text-blue-100">
            Jump into your most common tasks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <Button variant="secondary" className="h-auto flex-col gap-2 py-4">
              <MapPin className="h-5 w-5" />
              <span className="text-sm">Create Tour</span>
            </Button>
            <Button variant="secondary" className="h-auto flex-col gap-2 py-4">
              <Calendar className="h-5 w-5" />
              <span className="text-sm">Manage Booking</span>
            </Button>
            <Button variant="secondary" className="h-auto flex-col gap-2 py-4">
              <Users className="h-5 w-5" />
              <span className="text-sm">View Customers</span>
            </Button>
            <Button variant="secondary" className="h-auto flex-col gap-2 py-4">
              <BarChart3 className="h-5 w-5" />
              <span className="text-sm">Analytics</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
