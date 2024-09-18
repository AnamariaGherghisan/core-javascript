describe("twitterTransformer", () => {
  it("should return expected result with tweets and likes", () => {
    const expected = {
      tweets: [
        {
          id: 300,
          likes: 6378,
          username: "Alice",
          message: "Kia was over-rated!!",
          title: "Tweet from Alice",
          hashtags: "#cars #kia #newcar",
        },
        {
          id: 121,
          likes: 52342,
          username: "Bob",
          message: "I love my new nissan!!",
          title: "Tweet from Bob",
          hashtags: "#cars #nissan #newcar",
        },
      ],
      likes: 58720,
    };

    const actual = twitterTransformer({
      tweets: [
        {
          id: 256,
          likes: 2432,
          message: "This is my first tweet!!",
          username: "Kate",
          hashtags: ["cars", "bmw", "newcar"],
        },
        {
          id: 121,
          likes: 52342,
          message: "I love my new nissan!!",
          username: "Bob",
          hashtags: ["cars", "nissan", "newcar"],
        },
        {
          id: 300,
          likes: 6378,
          message: "Kia was over-rated!!",
          username: "Alice",
          hashtags: ["cars", "kia", "newcar"],
        },
      ],
    });

    expect(actual).toEqual(expected);
  });
});
