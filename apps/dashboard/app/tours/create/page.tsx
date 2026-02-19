"use client";

import { useState } from "react";
import { Button } from "@triplone/ui/components/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@triplone/ui/components/card";
import { Input } from "@triplone/ui/components/input";
import { Label } from "@triplone/ui/components/label";
import { Textarea } from "@triplone/ui/components/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@triplone/ui/components/select";
import { Plus, X } from "lucide-react";

export default function CreateTourPage() {
  const [highlights, setHighlights] = useState([""]);
  const [includedItems, setIncludedItems] = useState([""]);
  const [days, setDays] = useState([{ title: "", activities: [""] }]);

  const addHighlight = () => setHighlights([...highlights, ""]);
  const removeHighlight = (index: number) =>
    setHighlights(highlights.filter((_, i) => i !== index));
  const updateHighlight = (index: number, value: string) => {
    const newHighlights = [...highlights];
    newHighlights[index] = value;
    setHighlights(newHighlights);
  };

  const addIncludedItem = () => setIncludedItems([...includedItems, ""]);
  const removeIncludedItem = (index: number) =>
    setIncludedItems(includedItems.filter((_, i) => i !== index));
  const updateIncludedItem = (index: number, value: string) => {
    const newItems = [...includedItems];
    newItems[index] = value;
    setIncludedItems(newItems);
  };

  const addDay = () => setDays([...days, { title: "", activities: [""] }]);
  const removeDay = (dayIndex: number) =>
    setDays(days.filter((_, i) => i !== dayIndex));
  const updateDayTitle = (dayIndex: number, value: string) => {
    const newDays = [...days];
    if (newDays[dayIndex]) {
      newDays[dayIndex].title = value;
      setDays(newDays);
    }
  };

  const addActivity = (dayIndex: number) => {
    const newDays = [...days];
    if (newDays[dayIndex]) {
      newDays[dayIndex].activities.push("");
      setDays(newDays);
    }
  };
  const removeActivity = (dayIndex: number, activityIndex: number) => {
    const newDays = [...days];
    if (newDays[dayIndex]) {
      newDays[dayIndex].activities = newDays[dayIndex].activities.filter(
        (_, i) => i !== activityIndex
      );
      setDays(newDays);
    }
  };
  const updateActivity = (
    dayIndex: number,
    activityIndex: number,
    value: string
  ) => {
    const newDays = [...days];
    if (newDays[dayIndex]) {
      newDays[dayIndex].activities[activityIndex] = value;
      setDays(newDays);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create New Tour</h1>
        <p className="text-muted-foreground">
          Add a new tour package to your offerings
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-green-600">Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="title">Tour Title</Label>
                <Input id="title" placeholder="Enter tour title" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="destination">Destination</Label>
                <Select>
                  <SelectTrigger id="destination">
                    <SelectValue placeholder="Select Destination" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="coxs-bazar">Cox's Bazar</SelectItem>
                    <SelectItem value="sundarbans">Sundarbans</SelectItem>
                    <SelectItem value="sylhet">Sylhet</SelectItem>
                    <SelectItem value="chittagong">Chittagong</SelectItem>
                    <SelectItem value="sajek">Sajek Valley</SelectItem>
                    <SelectItem value="bandarban">Bandarban</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Input id="duration" placeholder="e.g., 3 Days 2 Nights" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select Destination" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="adventure">Adventure</SelectItem>
                    <SelectItem value="beach">Beach</SelectItem>
                    <SelectItem value="wildlife">Wildlife</SelectItem>
                    <SelectItem value="cultural">Cultural</SelectItem>
                    <SelectItem value="hiking">Hiking</SelectItem>
                    <SelectItem value="family">Family</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="maxGroup">Max Group Size</Label>
                <Input id="maxGroup" type="number" placeholder="e.g., 20" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe your tour package..."
                className="min-h-24"
              />
            </div>
          </CardContent>
        </Card>

        {/* Pricing */}
        <Card>
          <CardHeader>
            <CardTitle className="text-green-600">Pricing</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="price">৳ Price</Label>
              <Input id="price" type="number" placeholder="e.g., 5000" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="originalPrice">
                Original Price (৳) - Optional
              </Label>
              <Input
                id="originalPrice"
                type="number"
                placeholder="e.g., 7000"
              />
            </div>
          </CardContent>
        </Card>

        {/* Tour Details */}
        <Card>
          <CardHeader>
            <CardTitle className="text-green-600">Tour Details</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="space-y-4">
              <Label>Tour Highlights</Label>
              {highlights.map((highlight, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    placeholder="e.g., World's longest sea beach"
                    value={highlight}
                    onChange={(e) => updateHighlight(index, e.target.value)}
                  />
                  {highlights.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeHighlight(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addHighlight}
                className="mt-2"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Highlight
              </Button>
            </div>

            <div className="space-y-4">
              <Label>What's Included</Label>
              {includedItems.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    placeholder="e.g., Hotel accommodation"
                    value={item}
                    onChange={(e) => updateIncludedItem(index, e.target.value)}
                  />
                  {includedItems.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeIncludedItem(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addIncludedItem}
                className="mt-2"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Item
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Itinerary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-green-600">Itinerary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {days.map((day, dayIndex) => (
              <div key={dayIndex} className="space-y-4 rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <Label className="text-base font-semibold">
                    Day {dayIndex + 1}
                  </Label>
                  {days.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeDay(dayIndex)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`day-title-${dayIndex}`}>Day Title</Label>
                  <Input
                    id={`day-title-${dayIndex}`}
                    placeholder="e.g., Arrival & Beach Exploration"
                    value={day.title}
                    onChange={(e) => updateDayTitle(dayIndex, e.target.value)}
                  />
                </div>

                <div className="space-y-4">
                  <Label>Activities</Label>
                  {day.activities.map((activity, activityIndex) => (
                    <div key={activityIndex} className="flex gap-2">
                      <Input
                        placeholder="e.g., Pickup"
                        value={activity}
                        onChange={(e) =>
                          updateActivity(
                            dayIndex,
                            activityIndex,
                            e.target.value
                          )
                        }
                      />
                      {day.activities.length > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() =>
                            removeActivity(dayIndex, activityIndex)
                          }
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => addActivity(dayIndex)}
                    className="mt-2"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Activity
                  </Button>
                </div>
              </div>
            ))}

            <Button
              type="button"
              variant="outline"
              onClick={addDay}
              className="w-full"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Day
            </Button>
          </CardContent>
        </Card>

        {/* Form Actions */}
        <div className="flex gap-4">
          <Button type="submit" className="bg-green-600 hover:bg-green-700">
            Create Tour
          </Button>
          <Button type="button" variant="outline">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
