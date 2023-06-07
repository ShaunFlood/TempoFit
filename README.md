# TempoFit
An web application that generate recommendations from Spotify based upon tempo for work outs.

### A small problem to fix
The idea for this appiclation begun with wanting to expierence on using an spotify apis and specfically using OAuth 2.0 api calls, as it was different to what I've used before in the past.

So, I was playing around with idea and came up with one that would just generate a playlist based on genres with a desired BPM. Mainly for discoverablity of new music and also being able to keep a pace during a work or to set a mood with a playlist.

I set out a basic design of what I orginally wanted to implement and a preview overview of what the website would personally look like.

<img width="1272" alt="Screenshot 2023-06-07 at 16 21 40" src="https://github.com/ShaunFlood/TempoFit/assets/117595516/f003b605-6dee-4c22-a7d6-1155c84bdfe9">

I did code and create files to make inforgraphic information based upon users spoitfy accounts, but I felt like it took away from the whole theme of being a playlist generator. I have the files still in the project, but removed the aspects from the website as it just looked too clunky.

### How it works

The website uses spotifys OAuto 2.0, which once has been accepted by the user they gain access to the main website that gives them a breif instruction on how the wesbite works with a video.

In the form you enter your desired genres, which need to be combined by a comma without any spaces and has to been known by spotify with the desired bpm and amount of songs for the playlist. The spotify genre list is in a collpasible on the website under the 'Show Genres' button.

After the user enters information with the generate button then their desired request a table will be produced with what songs are in that playlist. This button can be clicked multiple time before the the playlist being saved to users spotify account.

After generating a playist the options are either to save or to log out of spotify with the buttons below the table.

Logging out will take you back to the landing bag and saving the playlist will pop up a prompt saying that the playlist has been saved.

https://github.com/ShaunFlood/TempoFit/assets/117595516/42379dc1-55c3-486f-b00a-f65bcebb54cb

### How to run 

1) After downloading you need to run npm install
2) cd /backend and run npm install
3) cd /client and run npm install
4) to start the build you just need to be in /client and type npm start 
5) It'll appear on your default browser and you can expience the application for yourself


### Upcoming changes

I do actually want to deploy the website, which would be a bonus of the website actaully working. I do want to update this maybe with css or bootstrap changes, so the website can look a bit better as well.
