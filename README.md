# Smart Glass

> Web-based home mirror, inspired by [Hannah Mitt's project](https://github.com/HannahMitt/HomeMirror).

Comes with many widgets (time, date, weather, news, and social) and can be voice controlled even offline.

## Install

1. [Install Meteor](https://www.meteor.com/install)
2. Clone this repo
    ```
    $ git clone git@github.com:yanisik/smartglass.git
    ```
3. Run the app
    ```
    $ meteor
    ```


## Customize

I decided to use Meteor for its real-time nature and ability to organize server and client side JavaScript in the same file.

Every "widget" on the screen can be found in the [`./widgets`] folder. Let's look at the [`time`] widget as an example:

1. Create the folder `time` with `./time/index.html` and `./time/index.js`

2. Define the `time` template in [`index.html`]

    ```
    <template name="time">
      <div style="font-size: 3em">
        {{time}}
      </div>
    </template>
    ```

3. Define the logic for rendering the `time` template in [`index.js`]

    ```
    if (Meteor.isClient) {
      Template.time.helpers({
        time: function() {
          return Chronos.liveMoment().format("hh:mma");
        }
      });
    }
    ```

4. Add the `time` template to [`./client/index.html`]

    ```
    <head>
      <title>Mirror</title>
    </head>

    <body>
      {{> date}}
      {{> time}}
      {{> weather}}
      {{> news}}
    </body>
    ```
    
