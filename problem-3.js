// // Problem 3: Message Processing with Retry Logic (Random ID Validation)

const payments = [];

function generateRandomTransaction() {
  const trxid = Math.floor(Math.random() * 1000);
  const amount = Math.floor(Math.random() * (1000 - 10 + 1)) + 10;

  return {
    trxid,
    amount,
    status: "pending",
    attemptCount: 0,
    timestamp: new Date(),
    nextAttempAt: new Date(),
  };
}

// Generate a new transaction every second
setInterval(() => {
  const message = generateRandomTransaction();
  payments.push(message);
  console.log("New Message Added", message);
}, 1000);

function netfeeCustomerRecharge(msg) {
  console.log(`Recharge is done successfully for transaction Id ${msg.trxid}`);
}

function retry_with_delay(attempt) {
  const delays = [2, 5, 10, 20, 30, 60]; // in minute
  return delays[attempt - 1] * 60 * 1000;
}

setInterval(() => {
  const random_Id = Math.floor(Math.random() * 1000);

  const now = new Date();

  const nextMessage = payments.find(
    (msg) =>
      (msg.status === "pending" || msg.status === "rejected") &&
      msg.nextAttempAt <= now
  );
  if (!nextMessage) return;
  if (nextMessage.trxid === random_Id) {
    nextMessage.status = "success";
    netfeeCustomerRecharge(nextMessage);
  } else {
    nextMessage.status = "rejected";
    nextMessage.attemptCount += 1;
    const delay = retry_with_delay(nextMessage.attemptCount); // 
    nextMessage.nextAttempAt = new Date(now.getTime() + delay);
    // console.log("Log rejected message: ", payments);
  }
}, 4000);
