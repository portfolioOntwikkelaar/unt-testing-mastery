async function createOrder(order, paymentService, orderRepository) {
  const paymentResult = await paymentService.pay(order.amount);

  if (!paymentResult.success) {
    throw new Error("Payment failed");
  }

  return orderRepository.store(order);
}

module.exports = createOrder;