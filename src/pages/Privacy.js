import React from "react";
import { Box, Heading} from "@chakra-ui/react";


const PrivacyStatement = () => {
  return (
    <Box p={5} m={10}>
      <Heading >Privacy Policy for Ganglyon</Heading >
      <p>
        <strong>Effective Date:</strong> 1 June, 2024
      </p>

      <Heading size={"md"}>1. Introduction</Heading >
      <p>
        Welcome to Ganglyon, the ultimate quiz app for Bangladeshi medical
        students. This Privacy Policy explains how we collect, use, and protect
        your personal information. By using Ganglyon, you agree to the terms
        outlined in this policy.
      </p>

      <Heading size={"md"}>2. Information We Collect</Heading >
      <p>We collect the following personal information:</p>
      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Gender</li>
        <li>Name of medical college</li>
        <li>Level of study</li>
      </ul>
      <p>
        We do not collect any device-specific information. No third-party
        services are integrated into our app.
      </p>

      <Heading size={"md"}>3. How We Use Your Information</Heading >
      <p>The information we collect is used to:</p>
      <ul>
        <li>Personalize your experience within the app</li>
        <li>Send you notifications relevant to your use of Ganglyon</li>
      </ul>

      <Heading size={"md"}>4. Data Storage</Heading >
      <p>
        Your data is stored securely in Firebase. Firebase employs robust
        security measures to protect your data from unauthorized access.
      </p>

      <Heading size={"md"}>5. User Rights</Heading >
      <p>
        You have the right to request the deletion of your personal data. If you
        wish to delete your data or have any privacy-related requests, please
        contact us via email at{" "}
        <a href="mailto:privacy@synapti.cc">privacy@synapti.cc</a>.
      </p>

      <Heading size={"md"}>6. Security Measures</Heading >
      <p>
        We use Firebase security measures to ensure your data is protected. We
        are committed to maintaining the confidentiality and security of your
        personal information.
      </p>

      <Heading size={"md"}>7. Children's Privacy</Heading >
      <p>
        Ganglyon is not intended for use by children under the age of 13. We do
        not knowingly collect personal information from children.
      </p>

      <Heading size={"md"}>8. Changes to This Privacy Policy</Heading >
      <p>
        We may update this Privacy Policy from time to time. If we make
        significant changes, we will notify you via email.
      </p>
    </Box>
  );
};

export default PrivacyStatement;
