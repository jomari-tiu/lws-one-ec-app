import { Link } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { useSession } from "@/context/AuthContext";
import { useGetUserData } from "@/src/hooks/useGetUserData";

const AccountPage = () => {
  const { signOut } = useSession();
  const { data, isLoading, isFetched } = useGetUserData();

  return (
    <View className="flex-1 bg-white">
      <View className="p-4 justify-center items-center flex-[0.5] bg-green-300">
        <View className="justify-center items-center rounded-full w-28 h-28 bg-green-400">
          <Octicons name="feed-person" size={72} color="white" />
        </View>
        <View>
          <Text className="text-2xl font-semibold font-poppins-sb text-center">
            {data?.data.userData.userFname} {data?.data.userData.userLname}
          </Text>

          <Text className="text-xs font-poppins text-center">
            Account Number:
          </Text>
          <Text className="text-xs font-poppins text-center">
            {data?.data.userData.userCustomerNumber}
          </Text>

          <Link
            href="/account-details"
            className="mt-2 font-poppins-md font-medium text-center"
          >
            Edit
          </Link>
        </View>
      </View>
      <View className="flex-1 space-y-4 p-4">
        <Text className="text-lg font-poppins">Personal Information</Text>
        <View>
          <Text className="font-semibold font-poppins-sb">Full Name:</Text>
          <Text className="font-poppins">
            {" "}
            {data?.data.userData.userFname} {data?.data.userData.userLname}
          </Text>
        </View>
        <View>
          <Text className="font-semibold font-poppins-sb">Email Address:</Text>
          <Text className="font-poppins">{data?.data.userData.userEmail}</Text>
        </View>
        <View>
          <Text className="font-semibold font-poppins-sb">Mobile Number:</Text>
          <Text className="font-poppins">
            {data?.data.userData.userContact}
          </Text>
        </View>
        <Text className="text-lg font-poppins">Account Information</Text>
        <View>
          <Text className="font-semibold font-poppins-sb">Email Address:</Text>
          <Text className="font-poppins">{data?.data.userData.userEmail}</Text>
        </View>
        <View>
          <Text className="font-semibold font-poppins-sb">Password:</Text>
          <Text className="font-poppins">********</Text>
        </View>
        <TouchableOpacity
          className="bg-green-300 p-4 rounded-lg"
          onPress={signOut}
        >
          <Text className="text-center font-semibold font-poppins-sb">
            Logout Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-2 rounded-lg">
          <Text className="text-center font-poppins">Terms & Conditions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountPage;
