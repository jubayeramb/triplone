import { Button } from "@triplone/ui/components/button";
import { Card } from "@triplone/ui/components/card";
import { Badge } from "@triplone/ui/components/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@triplone/ui/components/avatar";
import { MapPin, Mail, Phone, CalendarDays, Edit, Camera, User } from "lucide-react";
import type { UserProfile } from "../lib";

interface PersonalInfoCardProps {
  profile: UserProfile;
  onEdit?: () => void;
  onAvatarChange?: () => void;
}

export function PersonalInfoCard({ profile, onEdit, onAvatarChange }: PersonalInfoCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>
        <Button
          variant="ghost"
          size="sm"
          className="text-teal-600 hover:text-teal-700"
          onClick={onEdit}
        >
          <Edit className="h-4 w-4 mr-1" />
          Edit
        </Button>
      </div>

      <div className="flex items-start gap-4 mb-6">
        <div className="relative">
          <Avatar className="h-20 w-20">
            <AvatarImage src={profile.avatarUrl} alt={profile.name} />
            <AvatarFallback className="bg-gray-300 text-white">
              <User className="h-10 w-10" />
            </AvatarFallback>
          </Avatar>
          <button
            onClick={onAvatarChange}
            className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-green-600 border-2 border-white flex items-center justify-center hover:bg-green-700 transition-colors"
          >
            <Camera className="h-4 w-4 text-white" />
          </button>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">{profile.name}</h3>
          <p className="text-sm text-gray-500">Member since 2023</p>
          <Badge variant="secondary" className="mt-2">
            {profile.membershipTier}
          </Badge>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <div className="mt-1">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <div>
            <p className="text-xs text-gray-500">Email</p>
            <p className="text-sm font-medium text-gray-900">{profile.email}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="mt-1">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <div>
            <p className="text-xs text-gray-500">Address</p>
            <p className="text-sm font-medium text-gray-900">{profile.address}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="mt-1">
            <Phone className="h-5 w-5 text-gray-400" />
          </div>
          <div>
            <p className="text-xs text-gray-500">Phone</p>
            <p className="text-sm font-medium text-gray-900">{profile.phone}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="mt-1">
            <CalendarDays className="h-5 w-5 text-gray-400" />
          </div>
          <div>
            <p className="text-xs text-gray-500">Member Since</p>
            <p className="text-sm font-medium text-gray-900">{profile.memberSince}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
