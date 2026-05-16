"use client";

import { Button } from "@/app/components/ui/Button";
import { useAuthContext } from "@/app/contexts/AuthContext";
import { Mail, Phone, MapPin, Settings, User } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  logOutNavigateTo: string;
};

const ProfileClient = ({ logOutNavigateTo }: Props) => {
  const { user, userLogout } = useAuthContext();
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center text-black text-2xl font-bold">
                <User className="w-10 h-10" />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {user?.name?.firstname && user?.name?.lastname
                    ? `${user.name.firstname} ${user.name.lastname}`
                    : user?.username || ""}
                </h1>

                {user?.username && (
                  <p className="text-gray-500">@{user.username}</p>
                )}
              </div>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Settings className="w-4 h-4" />
              <span>Edit Profile</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Contact Information
          </h2>

          <div className="space-y-5">
            <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
              <Mail className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Email Address</p>
                <p className="text-gray-900 font-medium">
                  {user?.email || (
                    <span className="text-gray-400 italic">Not provided</span>
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
              <Phone className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Phone Number</p>
                <p className="text-gray-900 font-medium">
                  {user?.phone || (
                    <span className="text-gray-400 italic">Not provided</span>
                  )}
                </p>
              </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />

                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-3">Address</p>

                  {user?.address ? (
                    <div className="space-y-2">
                      <div>
                        <p className="text-gray-900 font-medium">
                          {user.address.number}, {user.address.street}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-x-6 gap-y-1 text-gray-900 font-medium">
                        <span>{user.address.city}</span>
                        <span>{user.address.zipcode}</span>
                      </div>

                      <div className="flex gap-6 pt-2 text-sm text-gray-500">
                        <span>
                          <span className="font-medium">Latitude:</span>{" "}
                          {user.address.geolocation?.lat}
                        </span>
                        <span>
                          <span className="font-medium">Longitude:</span>{" "}
                          {user.address.geolocation?.long}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <span className="text-gray-400 italic">Not provided</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {user && (
          <Button
            label="Log Out"
            onClick={() => {
              userLogout();
              router.push(logOutNavigateTo);
            }}
            className="p-4 border border-gray-200 rounded-lg justify-center  mt-6 w-full bg-red-600 hover:bg-red-800 text-white"
          />
        )}
      </div>
    </div>
  );
};

export default ProfileClient;
