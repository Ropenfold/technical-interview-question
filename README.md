# technical-interview-question

So I recently undertook a technical interview for a large company in the UK (They shall remain nameless as I wouldn't want to reveal their process). I made a bit of a mess of this technical interview and so I thought as a way of feeling better, I'd finish the challenge in the best way possible. Big learning lession from this process. Don't be suprised if the challenge set is way more basic than you envisage, relax and do your best!

# Image Finder

## Brief

We would like to build a JS application that displays images fetched from an external service.

A basic service would have the following functionalities:

Ability to fetch data from an external image searching API
Transform and filter the data
Display on the page
We could plan to extend the service by introducing:

Add test coverage or implementing directly a TDD approach
For the purpose of this exercise, the external API will be NASA's media searching API

```
https://images-api.nasa.gov/search?q=moon
```

Here is an example of the payload:

```json
{
  "collection": {
    "href": "https://images-api.nasa.gov/search?q=moon",
    "version": "1.0",
    "items": [
      {
        "href": "https://images-assets.nasa.gov/image/PIA12235/collection.json",
        "data": [ ... ],
        "links": [
          {
            "href": "https://images-assets.nasa.gov/image/PIA12235/PIA12235~thumb.jpg",
            "render": "image",
            "rel": "preview"
          }
        ]
      }
    ]
  }
}
```

Here is what we expect our App to show:

```
<div>
    <img src="https://images-assets.nasa.gov/image/PIA12235/PIA12235~thumb.jpg" />
    <img src="https://images-assets.nasa.gov/image/PIA12235/PIA12236~thumb.jpg" />
    <img src="https://images-assets.nasa.gov/image/PIA12235/PIA12237~thumb.jpg" />
    (...)
</div>
```

I didn't want to spend too long on this as tbh I just wanted to prove I could get something working in a similar time to the test. I'm happy with this outcome.
