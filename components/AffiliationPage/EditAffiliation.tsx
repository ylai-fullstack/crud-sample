import React, { useState, useEffect } from "react";
import {
  Text,
  Input,
  Stack,
  Radio,
  RadioGroup,
  Textarea,
} from "@chakra-ui/react";

const EditAffiliation = (props) => {
  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const [user, setUser] = useState(props.currentUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.username) props.updateUser(user);
  };

  return (
    <>
      <Stack>
        <Text as="p" fontWeight="medium" pt={5}>
          Name
        </Text>
        <Input
          size="md"
          border="2px"
          maxW="100%"
          value={user.name}
          name="name"
          onChange={handleChange}
        />
        <Text as="p" fontWeight="medium" pt={5}>
          Initials
        </Text>
        <Input
          size="md"
          border="2px"
          value={user.initial}
          name="initials"
          onChange={handleChange}
        />
        <Text as="p" fontWeight="medium" pt={5}>
          Native Name (Optional)
        </Text>
        <Input
          size="md"
          border="2px"
          value={user.native_name}
          name="native_name"
          onChange={handleChange}
        />
        <Text as="p" fontWeight="medium" pt={5}>
          Description (Optional)
        </Text>
        <Textarea
          size="lg"
          border="2px"
          value={user.description}
          name="description"
          onChange={handleChange}
        />
      </Stack>
      <RadioGroup className="area_required" mb={7} mt={7}>
        <Text as="p" fontWeight="medium" mb={3}>
          Area Required
        </Text>
        <Stack direction="row" spacing={10}>
          <Radio colorScheme="purple" value="area_required_yes">
            Yes
          </Radio>
          <Radio colorScheme="purple" value="area_required_no">
            No
          </Radio>
        </Stack>
      </RadioGroup>
      <RadioGroup className="international" mb={5} mt={5}>
        <Text as="p" fontWeight="medium" mb={3}>
          International
        </Text>
        <Stack direction="row" spacing={10}>
          <Radio colorScheme="purple" value="international_yes">
            Yes
          </Radio>
          <Radio colorScheme="purple" value="international_no">
            No
          </Radio>
        </Stack>
      </RadioGroup>
      <button className="button-primary" type="submit" onClick={handleSubmit}>
        Save
      </button>
      <button type="submit" onClick={() => props.setEditing(false)}>
        Cancel
      </button>
    </>
    // <form>
    //     <label>Name</label>
    //     <input className="u-full-width" type="text" value={user.name} name="name" onChange={handleChange} />
    //     <label>Username</label>
    //     <input className="u-full-width" type="text" value={user.username} name="username" onChange={handleChange} />
    //     <button className="button-primary" type="submit" onClick={handleSubmit} >Edit user</button>
    //     <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
    // </form>
  );
};

export default EditAffiliation;
