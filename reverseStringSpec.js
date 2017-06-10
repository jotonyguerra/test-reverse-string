describe('reverseString', () => {
  it("takes a word as an argument", () => {
    let reverseStringFunc = reverseString('redrum');
    expect(reverseStringFunc).toBeDefined();
    expect(reverseStringFunc).toEqual('murder')
  })

  it("returns the reverse of a string", () => {
    let reverseStringFunc = reverseString('redrum');
    expect(reverseStringFunc).toBeDefined();
    expect(reverseStringFunc).toEqual('murder')
  })
  it("returns the reverse of a string", () => {
    let reverseStringFunc = reverseString('taco');
    expect(reverseStringFunc).toBeDefined();
    expect(reverseStringFunc).toEqual('ocat')
  });
})
