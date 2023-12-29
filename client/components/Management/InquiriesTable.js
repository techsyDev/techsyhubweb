import React from "react";
import {
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  Tooltip,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { team } from "@/assets/data";
import Image from "next/image";
import eye from "@/assets/icons/eye.svg";
import edit from "@/assets/icons/edit.svg";
import deleteIcon from "@/assets/icons/delete.svg";

const InquiriesTable = ({ title }) => {
  // Show records
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //   Filter
  const [anchorElFilter, setAnchorElFilter] = React.useState(null);
  const openFilter = Boolean(anchorElFilter);
  const handleClickFilter = (event) => {
    setAnchorElFilter(event.currentTarget);
  };
  const handleCloseFilter = () => {
    setAnchorElFilter(null);
  };
  //   Sort
  const [anchorElSort, setAnchorElSort] = React.useState(null);
  const openSort = Boolean(anchorElSort);
  const handleClickSort = (event) => {
    setAnchorElSort(event.currentTarget);
  };
  const handleCloseSort = () => {
    setAnchorElSort(null);
  };
  // Table Pagination
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box className="w-full min-h-[90vh] h-fit px-7 py-2  bg-white">
      {/* Active Data & Add Bar */}
      <Box className="flex items-center justify-between">
        <Box className="flex ">
          <Typography className="text-[#758CA3] text-sm capitalize poppins">
            Active {title} 23
          </Typography>
          <Typography className="text-[#758CA3] text-sm capitalize ml-10 poppins">
            Total {title} 48
          </Typography>
        </Box>
        <Button
          variant="contained"
          className="button-bg py-3 px-4 text-sm rounded-lg shadow-none"
        >
          Add new Member
        </Button>
      </Box>
      {/* Search & Filters Bar */}
      <Box className="flex items-center justify-between">
        <Box className="flex">
          <Button className="text-[#758CA3] text-sm capitalize poppins mr-3 ps-0 justify-start">
            Pending
          </Button>
          <Button className="text-[#758CA3] text-sm capitalize mr-3 poppins ps-0 justify-start">
            Active
          </Button>
          <Button className="text-[#758CA3] text-sm capitalize  poppins ps-0 justify-start">
            Inactive
          </Button>
        </Box>
        <Box className="flex items-center justify-evenly mt-3">
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className="text-xs text-[#758CA3] poppins"
            >
              {rowsPerPage} out of {team.length} Records
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Show 50</MenuItem>
              <MenuItem onClick={handleClose}>Show 100</MenuItem>
              <MenuItem onClick={handleClose}>Show 150</MenuItem>
            </Menu>
          </div>
          <input
            type="text"
            className="w-40 search-field px-3 py-2 text-[#758CA3] text-sm poppins ms-2"
            placeholder="Search..."
          />
          <Box className="flex justify-between items-center ml-3">
            <div>
              <Button
                id="basic-button"
                aria-controls={openFilter ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openFilter ? "true" : undefined}
                onClick={handleClickFilter}
                className="text-xs text-[#758CA3] poppins"
                startIcon={<FilterAltOutlinedIcon />}
              >
                Filter
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorElFilter}
                open={openFilter}
                onClose={handleCloseFilter}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleCloseFilter}>Filter By</MenuItem>
                <MenuItem onClick={handleCloseFilter}>Filter By</MenuItem>
                <MenuItem onClick={handleCloseFilter}>Filter By</MenuItem>
              </Menu>
            </div>
            <div>
              <Button
                id="basic-button"
                aria-controls={openSort ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openSort ? "true" : undefined}
                onClick={handleClickSort}
                className="text-xs text-[#758CA3] poppins"
              >
                Sort
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorElSort}
                open={openSort}
                onClose={handleCloseSort}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleCloseSort}>Sort By</MenuItem>
                <MenuItem onClick={handleCloseSort}>Sort By</MenuItem>
                <MenuItem onClick={handleCloseSort}>Sort By</MenuItem>
              </Menu>
            </div>
            {/* <Button
                className="text-[#758CA3] text-sm capitalize poppins ps-0 justify-start text-normal"
                startIcon={<FilterAltOutlinedIcon />}
              >
                Filter
              </Button>
              <Button className="text-[#758CA3] text-sm capitalize poppins ps-0 justify-start text-normal">
                Sort
              </Button> */}
          </Box>
        </Box>
      </Box>
      <ContentTable />
    </Box>
  );
};

function ContentTable() {
  // // Table Pagination
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };
  return (
    <>
      <TableContainer className="w-full mt-4">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="button-bg rounded-lg">
              <TableCell className="text-white poppins rounded-l-xl ps-7 w-28 text-xs border-b-0">
                Inquiry No.
              </TableCell>
              <TableCell className="text-white poppins text-xs border-b-0 w-32">
                Name
              </TableCell>
              <TableCell className="text-white poppins text-xs border-b-0 w-32">
                Phone
              </TableCell>
              <TableCell className="text-white poppins text-xs border-b-0 w-fit">
                Email
              </TableCell>
              <TableCell className="text-white poppins text-xs border-b-0 w-32">
                Address
              </TableCell>
              <TableCell className="text-white poppins text-xs border-b-0 px-1">
                Assignee
              </TableCell>
              <TableCell className="text-white poppins text-xs border-b-0 px-1">
                Inquiry Status
              </TableCell>
              <TableCell className="text-white poppins text-xs border-b-0">
                Last Updated
              </TableCell>
              <TableCell className="text-white poppins text-xs border-b-0 rounded-r-xl">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {team
              // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, i) => (
                <TableRow key={i} className="bg-[#F9FEFF]">
                  <TableCell
                    component="th"
                    scope="row"
                    className="text-xs border-b-0 text-[#758CA3]"
                  >
                    i87g6
                  </TableCell>
                  <TableCell className="text-xs border-b-0 text-[#758CA3]">
                    {row.name}
                  </TableCell>
                  <TableCell className="text-xs border-b-0 text-[#758CA3]">
                    {row.phone}
                  </TableCell>
                  <TableCell className="text-xs border-b-0 text-[#758CA3]">
                    {row.email}
                  </TableCell>
                  <TableCell className="border-b-0 text-[#758CA3]">
                    <Typography className="text-xs  w-32 truncate">
                      {row.address}
                    </Typography>
                  </TableCell>
                  <TableCell className="text-xs border-b-0 text-[#758CA3]">
                    {row.role}
                  </TableCell>
                  <TableCell
                    className="text-xs border-b-0 text-[#758CA3]"
                    align="center"
                  >
                    {row.status}
                  </TableCell>
                  <TableCell className="text-xs border-b-0 text-[#758CA3] capitalize">
                    two hours ago
                  </TableCell>
                  <TableCell className="text-xs border-b-0 text-[#758CA3]">
                    <Box className="flex items-center">
                      <Tooltip title="See Inquiry">
                        <IconButton size="small">
                          <Link
                            href={{
                              pathname: "/management",
                              query: { route: "inquiry", id: "i87g6" },
                            }}
                          >
                            <Image src={eye} alt="eye" className="h-2 w-auto" />
                          </Link>
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Edit">
                        <IconButton size="small">
                          <Image src={edit} alt="Edit" className="h-3 w-auto" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="delete">
                        <IconButton size="small">
                          <Image
                            src={deleteIcon}
                            alt="delete"
                            className="h-3 w-auto"
                          />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box className="w-full h-fit flex justify-end pe-14 my-4">
        <Button className="text-xs text-[#758CA3] mr-2" size="small">
          Previous
        </Button>
        {[1, 2, 3].map((n, i) => (
          <IconButton
            size="small"
            className="text-xs text-[#758CA3] mx-1"
            key={i}
          >
            {n}
          </IconButton>
        ))}
        <Button className="text-xs text-[#758CA3] ml-2" size="small">
          Next
        </Button>
      </Box>
      {/* <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={customers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
    </>
  );
}

export default InquiriesTable;
