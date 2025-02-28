import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function Form() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    mobile: "",
    pincode: "",
    city: "",
    state: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    pincode: "",
    city: "",
    state: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 5) {
      newErrors.name = "Name must be at least 5 characters long";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number is invalid";
    }

    if (!formData.pincode) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Pincode number is invalid";
    }

    if (!formData.city) {
      newErrors.city = "city is required";
    }

    if (!formData.state) {
      newErrors.state = "state is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log({ formData });
      alert("Form is valid!");
    }
  };

  const handleReset = () => {
    setformData({
      name: "",
      email: "",
      mobile: "",
      pincode: "",
      city: "",
      state: "",
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        marginTop: "5%",
      }}
    >
      <Box>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={Boolean(errors.name)}
              helperText={errors.name}
              sx={styles.textField}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
              sx={styles.textField}
            />
            <TextField
              label="Mobile Number"
              name="mobile"
              type="text"
              value={formData.mobile}
              onChange={handleChange}
              error={Boolean(errors.mobile)}
              helperText={errors.mobile}
              sx={styles.textField}
            />
            <TextField
              label="Pincode"
              name="pincode"
              type="text"
              value={formData.pincode}
              onChange={handleChange}
              error={Boolean(errors.pincode)}
              helperText={errors.pincode}
              sx={styles.textField}
            />
            <TextField
              label="City"
              name="city"
              type="text"
              value={formData.city}
              onChange={handleChange}
              error={Boolean(errors.city)}
              helperText={errors.city}
              sx={styles.textField}
            />
            <TextField
              label="State"
              name="state"
              type="text"
              value={formData.state}
              onChange={handleChange}
              error={Boolean(errors.state)}
              helperText={errors.state}
              sx={styles.textField}
            />
            <Box sx={{ display: "flex", gap: 10 }}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
              <Button
                type="button"
                variant="contained"
                color="primary"
                onClick={handleReset}
              >
                Reset
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

const styles = {
  textField: {
    marginBottom: "10px",
    width: "140%",
  },
};
export default Form;
