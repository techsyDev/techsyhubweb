import React from "react";
import {
  Box,
  FormControl,
  Typography,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Settings = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box className="w-full min-h-[90vh] h-fit px-7 py-2 bg-white">
      <Box className="w-full h-fit cms-card p-5 relative mb-10">
        <Box className="flex items-center justify-between mb-4">
          <Box className="w-2/4">
            <Typography className="text-xs mb-1.5 poppins">
              Current Password
            </Typography>
            <FormControl className="w-full" variant="outlined">
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Current Password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Box>
          <Button
            variant="contained"
            className="button-grey-bg bg-none py-2 w-28 text-sm rounded-md capitalize shadow-none"
          >
            Save
          </Button>
        </Box>
        <Box className="w-2/4 mb-4">
          <Typography className="text-xs mb-1.5 poppins">
            New Password
          </Typography>
          <FormControl className="w-full" variant="outlined">
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter New Password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Box>
        <Box className="w-2/4 mb-4">
          <Typography className="text-xs mb-1.5 poppins">
            Confirm Password
          </Typography>
          <FormControl className="w-full" variant="outlined">
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter Confirm Password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Settings;
