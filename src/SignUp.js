import React, { useState } from "react";
import { auth } from "./firebase-config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Text,
  Select,
  RadioGroup,
  Radio,
  Stack,
} from "@chakra-ui/react";
import { db } from "./firebase-config";
import { doc, setDoc } from "firebase/firestore";

const MedicalCollegeList = [
  "Abdul Malek Ukil Medical College",
  "Ad-din Sakina Medical College",
  "Ad-din Women's Medical College",
  "Ad-Din Akij Medical College",
  "Ahsania Mission Medical College",
  "Aichi Medical College",
  "Anwer Khan Modern Medical College",
  "Armed Forces Medical College",
  "Army Medical College Bogura",
  "Army Medical College Cumilla",
  "Army Medical College, Chittagong",
  "Army Medical College, Jashore",
  "Ashiyan Medical College",
  "Bangabandhu Medical College",
  "Bangabandhu Sheikh Mujib Medical College",
  "Bangladesh Medical College",
  "Barind Medical College",
  "Bashundhara Ad-din Medical College",
  "BGC Trust Medical College",
  "Bikrampur Bhuiyans Medical College",
  "Brahmanbaria Medical College",
  "Central Medical College",
  "Chandpur Medical College",
  "Chattagram International Medical College",
  "Chattagram Maa-O-Shishu Hospital Medical College",
  "City Medical College",
  "Community Based Medical College",
  "Cox's Bazar Medical College",
  "Cumilla Medical College",
  "Delta Medical College",
  "Dhaka Community Medical College",
  "Dhaka National Medical College",
  "Diabetic Association Medical College",
  "Dr. Sirajul Islam Medical College",
  "East West Medical College",
  "Eastern Medical College",
  "Enam Medical College and Hospital",
  "Gazi Medical College",
  "Gonoshasthaya Samaj Vittik Medical College",
  "Green Life Medical College",
  "Holy Family Red Crescent Medical College",
  "Ibn Sina Medical College",
  "Institute of Applied Health Sciences",
  "International Medical College",
  "Islami Bank Medical College",
  "Jahurul Islam Medical College",
  "Jalalabad Ragib-Rabeya Medical College",
  "Jashore Medical College",
  "Khwaja Yunus Ali Medical College",
  "Khulna City Medical College",
  "Khulna Medical College",
  "Kumudini Women's Medical College",
  "Magura Medical College",
  "Mainamoti Medical College",
  "Marine City Medical College",
  "Marks Medical College",
  "M Abdur Rahim Medical College",
  "Medical College for Women & Hospital",
  "MH Samorita Medical College",
  "Monno Medical College",
  "Monowara Sikder Medical College",
  "Mugda Medical College",
  "Mymensingh Medical College",
  "Naogaon Medical College",
  "Netrokona Medical College, Netrokona",
  "Nilphamari Medical College",
  "North Bengal Medical College",
  "North East Medical College",
  "Northern International Medical College",
  "Parkview Medical College",
  "Pabna Medical College",
  "Patuakhali Medical College",
  "Popular Medical College",
  "President Abdul Hamid Medical College",
  "Prime Medical College",
  "Rajshahi Medical College",
  "Rangamati Medical College",
  "Rangpur Army Medical College",
  "Rangpur Community Medical College",
  "Rangpur Medical College",
  "Satkhira Medical College",
  "Shaheed M. Monsur Ali Medical College",
  "Shaheed Monsur Ali Medical College",
  "Shaheed Suhrawardy Medical College",
  "Shaheed Tajuddin Ahmad Medical College",
  "Shaheed Ziaur Rahman Medical College",
  "Shahid Syed Nazrul Islam Medical College",
  "Sheikh Hasina Medical College, Habiganj",
  "Sheikh Hasina Medical College, Jamalpur",
  "Sheikh Hasina Medical College, Tangail",
  "Sheikh Sayera Khatun Medical College",
  "Sher-e-Bangla Medical College",
  "Sir Salimullah Medical College",
  "Southern Medical College",
  "South Apollo Medical College",
  "Sylhet MAG Osmani Medical College",
  "Sylhet Women's Medical College",
  "TMSS Medical College",
  "Tairunnessa Memorial Medical College",
  "United Medical College",
  "Universal Medical College",
  "US-Bangla Medical College",
  "Uttara Adhunik Medical College",
  "Z. H. Sikder Women's Medical College",
];

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [college, setCollege] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");
  const [profession, setProfession] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSignUp = async () => {
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Update display name using Firebase Authentication
      await updateProfile(userCredential.user, {
        displayName: name,
      });

      // Store additional information in Firestore
      const userRef = doc(db, "users", userCredential.user.uid);
      await setDoc(
        userRef,
        {
          email,
          name,
          college,
          year,
          phoneNumber,
          gender,
          profession,
        },
        { merge: true }
      );

      toast({
        title: "Account created successfully",
        description: "Welcome, " + name,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error creating account",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    setIsLoading(false);
  };

  return (
    <Box my={7} p="8" borderWidth="1px" borderRadius="lg" boxShadow="lg">
      <Text as="b" fontSize="lg" color="primary">
        Don't have an account? Sign Up
      </Text>
      <FormControl isRequired mt={4}>
        <FormLabel>Name</FormLabel>
        <Input
          variant="filled"
          height={"50px"}
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl mt={4} isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          variant="filled"
          height={"50px"}
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl mt={4} isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          variant="filled"
          height={"50px"}
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <FormControl mt={4} isRequired>
        <FormLabel>Phone Number</FormLabel>
        <Input
          variant="filled"
          height={"50px"}
          type="tel"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => {
            const input = e.target.value;
            if (/^\d{0,11}$/.test(input)) {
              setPhoneNumber(input);
            } else {
              alert("Phone number should start with 01");
            }
          }}
        />
      </FormControl>
      <FormControl mt={4} isRequired>
        <FormLabel>Profession</FormLabel>
        <Select
          placeholder="Select your profession"
          onChange={(e) => setProfession(e.target.value)}
          value={profession}
          variant="filled"
          height={"50px"}
        >
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
          <option value="Other">Other</option>
        </Select>
      </FormControl>
      <FormControl mt={4} isRequired>
        <FormLabel>Medical College</FormLabel>
        <Select
          variant="filled"
          height={"50px"}
          placeholder="Select your college"
          onChange={(e) => setCollege(e.target.value)}
          value={college}
        >
          {MedicalCollegeList.map((college, index) => (
            <option key={index} value={college}>
              {college}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl mt={4} isRequired>
        <FormLabel>Gender</FormLabel>
        <RadioGroup onChange={setGender} value={gender}>
          <Stack direction="row">
            <Radio value="Male">Male</Radio>
            <Radio value="Female">Female</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl mt={4} isRequired>
        <FormLabel>Level of Study</FormLabel>
        <Select
          variant="filled"
          height={"50px"}
          placeholder="Select your year"
          onChange={(e) => setYear(e.target.value)}
          value={year}
        >
          <option value="1"> 1st Year</option>
          <option value="2"> 2nd Year</option>
          <option value="3"> 3rd Year</option>
          <option value="4"> 4th Year</option>
          <option value="5"> 5th Year</option>
          <option value="6">Post Grad</option>
        </Select>
      </FormControl>

      <Button
        width={"full"}
        height={"50px"}
        bg="primary"
        color="white"
        variant="outline"
        mt="4"
        onClick={handleSignUp}
        isLoading={isLoading}
      >
        Sign Up
      </Button>
    </Box>
  );
}

export default SignUp;
