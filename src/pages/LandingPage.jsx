import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  TextField,
  Button,
  Grid,
  Avatar,
  IconButton,
  Alert,
  useMediaQuery,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  logout,
  fetchFinancialData,
  submitTransaction,
} from "../redux/appSlice";
import { useNavigate } from "react-router-dom";
import { ArrowBack, Refresh } from "@mui/icons-material";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#556B2F", // Olive green
    },
    secondary: {
      main: "#8F9779", // Light olive
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
  },
});

const LandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { user, financialData, transactionStatus } = useSelector(
    (state) => state.app
  );

  // Get initial transaction data from sessionStorage if available
  const getInitialTransactionData = () => {
    const savedData = sessionStorage.getItem("transactionFormData");
    return savedData
      ? JSON.parse(savedData)
      : { type: "income", category: "", amount: "" };
  };

  const [transaction, setTransaction] = useState(getInitialTransactionData());
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(fetchFinancialData());
  }, [dispatch]);

  // Save form data to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem("transactionFormData", JSON.stringify(transaction));
  }, [transaction]);

  const handleLogout = () => {
    sessionStorage.removeItem("transactionFormData");
    dispatch(logout());
    navigate("/");
  };

  const validate = () => {
    const newErrors = {};
    if (!transaction.category) newErrors.category = "Category is required";
    if (!transaction.amount || isNaN(transaction.amount)) {
      newErrors.amount = "Valid amount is required";
    } else if (parseFloat(transaction.amount) <= 0) {
      newErrors.amount = "Amount must be greater than 0";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      dispatch(
        submitTransaction({
          ...transaction,
          amount: parseFloat(transaction.amount),
        })
      )
        .unwrap()
        .then(() => {
          dispatch(fetchFinancialData());
          setTransaction({ type: "income", category: "", amount: "" });
          sessionStorage.removeItem("transactionFormData");
        });
    }
  };

  const refreshData = () => {
    dispatch(fetchFinancialData());
  };

  if (!user) {
    navigate("/");
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header user={user} />

      <Container maxWidth="lg" sx={{ py: 4, minHeight: "calc(100vh - 128px)" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 4,
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <Box
            sx={{ display: "flex", alignItems: "center", mb: isMobile ? 2 : 0 }}
          >
            <Avatar
              sx={{ bgcolor: "primary.main", mr: 2, width: 48, height: 48 }}
            >
              {user.name.charAt(0).toUpperCase()}
            </Avatar>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Welcome, {user.name.split(" ")[0]}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignSelf: isMobile ? "flex-end" : "center",
            }}
          >
            <IconButton
              onClick={refreshData}
              sx={{
                mr: 1,
                color: "primary.main",
                "&:hover": { backgroundColor: "rgba(85, 107, 47, 0.1)" },
              }}
            >
              <Refresh />
            </IconButton>
            <Button
              variant="outlined"
              color="error"
              onClick={handleLogout}
              startIcon={<ArrowBack />}
              size={isMobile ? "small" : "medium"}
            >
              {isMobile ? "Logout" : "Sign Out"}
            </Button>
          </Box>
        </Box>

        {transactionStatus?.success && (
          <Alert severity="success" sx={{ mb: 3 }}>
            {transactionStatus.message}
          </Alert>
        )}

        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                p: 3,
                borderRadius: 2,
                bgcolor: "background.paper",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                height: "100%",
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: "primary.main", fontWeight: 600 }}
              >
                Financial Summary - {new Date().toLocaleDateString()}
              </Typography>

              <TableContainer
                component={Paper}
                sx={{
                  mb: 4,
                  maxHeight: 400,
                  overflow: "auto",
                  "&::-webkit-scrollbar": { width: "6px" },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "primary.main",
                  },
                }}
              >
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          bgcolor: "primary.main",
                          color: "white",
                          fontWeight: 600,
                        }}
                      >
                        Type
                      </TableCell>
                      <TableCell
                        sx={{
                          bgcolor: "primary.main",
                          color: "white",
                          fontWeight: 600,
                        }}
                      >
                        Category
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          bgcolor: "primary.main",
                          color: "white",
                          fontWeight: 600,
                        }}
                      >
                        Amount ($)
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        rowSpan={(financialData?.income?.length || 0) + 1}
                        sx={{
                          fontWeight: "bold",
                          bgcolor: "rgba(85, 107, 47, 0.05)",
                        }}
                      >
                        Income
                      </TableCell>
                    </TableRow>
                    {financialData?.income?.map((item, index) => (
                      <TableRow key={`income-${index}`} hover>
                        <TableCell>{item.category}</TableCell>
                        <TableCell align="right">
                          {item.amount.toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))}

                    <TableRow>
                      <TableCell
                        rowSpan={(financialData?.outgoing?.length || 0) + 1}
                        sx={{
                          fontWeight: "bold",
                          bgcolor: "rgba(85, 107, 47, 0.05)",
                        }}
                      >
                        Expenses
                      </TableCell>
                    </TableRow>
                    {financialData?.outgoing?.map((item, index) => (
                      <TableRow key={`outgoing-${index}`} hover>
                        <TableCell>{item.category}</TableCell>
                        <TableCell align="right">
                          {item.amount.toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <Box
                sx={{
                  bgcolor: "rgba(85, 107, 47, 0.1)",
                  p: 2,
                  borderRadius: 2,
                  textAlign: "center",
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Net Balance: ${(financialData?.balance || 0).toFixed(2)}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 3,
                borderRadius: 2,
                bgcolor: "background.paper",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                height: "100%",
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: "primary.main", fontWeight: 600 }}
              >
                New Transaction
              </Typography>

              <Select
                fullWidth
                value={transaction.type}
                onChange={(e) =>
                  setTransaction({ ...transaction, type: e.target.value })
                }
                sx={{ mb: 2 }}
                size={isMobile ? "small" : "medium"}
              >
                <MenuItem value="income">Income</MenuItem>
                <MenuItem value="outgoing">Expense</MenuItem>
              </Select>

              <Select
                fullWidth
                value={transaction.category}
                onChange={(e) =>
                  setTransaction({ ...transaction, category: e.target.value })
                }
                displayEmpty
                error={!!errors.category}
                sx={{ mb: 2 }}
                size={isMobile ? "small" : "medium"}
              >
                <MenuItem value="" disabled>
                  Select Category
                </MenuItem>
                {transaction.type === "income"
                  ? [
                      "Register Sales",
                      "Sales Tax",
                      "Lotto",
                      "Instant Lottery",
                      "Other Income",
                    ].map((item) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))
                  : [
                      "Cash",
                      "Credit Card",
                      "Lotto Payout",
                      "Utilities",
                      "Rent",
                      "Supplies",
                      "Other Expense",
                    ].map((item) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
              </Select>
              {errors.category && (
                <Typography
                  color="error"
                  variant="body2"
                  sx={{ mb: 1, mt: -1 }}
                >
                  {errors.category}
                </Typography>
              )}

              <TextField
                fullWidth
                label="Amount ($)"
                type="number"
                value={transaction.amount}
                onChange={(e) =>
                  setTransaction({ ...transaction, amount: e.target.value })
                }
                error={!!errors.amount}
                helperText={errors.amount}
                sx={{ mb: 2 }}
                size={isMobile ? "small" : "medium"}
                inputProps={{ min: "0.01", step: "0.01" }}
              />

              <Button
                variant="contained"
                fullWidth
                onClick={handleSubmit}
                sx={{
                  py: 1.5,
                  backgroundColor: "primary.main",
                  "&:hover": { backgroundColor: "primary.dark" },
                }}
                size={isMobile ? "small" : "medium"}
              >
                Record Transaction
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </ThemeProvider>
  );
};

export default LandingPage;
