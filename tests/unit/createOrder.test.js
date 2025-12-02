const createOrder = require("../../src/application/use-cases/createOrder");

describe("createOrder", () => {
  test("stores order when payment succeeds", async () => {
    const paymentService = {
      pay: jest.fn().mockResolvedValue({ success: true })
    };
    const orderRepository = {
      store: jest.fn().mockResolvedValue({ id: 100 })
    };

    const result = await createOrder({ amount: 50 }, paymentService, orderRepository);

    expect(paymentService.pay).toHaveBeenCalledWith(50);
    expect(orderRepository.store).toHaveBeenCalled();
    expect(result.id).toBe(100);
  });

  test("throws error when payment fails", async () => {
    const paymentService = {
      pay: jest.fn().mockResolvedValue({ success: false })
    };
    const orderRepository = {
      store: jest.fn()
    };

    await expect(
      createOrder({ amount: 50 }, paymentService, orderRepository)
    ).rejects.toThrow("Payment failed");
  });
});