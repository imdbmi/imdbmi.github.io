---
layout: page
usemathjax: true
---

## Introduction
The movie industry has long been criticized for its lack of diversity both **on** and **off** screen. Despite numerous efforts to address this issue, the representation of marginalized groups remains inadequate, with many voices and perspectives still underrepresented or completely absent from mainstream films. This lack of diversity not only perpetuates harmful stereotypes and biases, but it also limits the stories and perspectives that are told and perpetuates a narrow and limited view of the world.

## Research questions

To find out what it was like it the history of movie industy, we devised our reseach questions into two categories: **On** screen and **Off** screen where we will take a deeper look at the diversity in the movie industry.
{% include services.html %}
### Off screen
> What is the evolution of the gender Gap in movies? Is there a significant difference in number of movies directed by men vs women? And does the gender of lead actor or director impact the revenue of a movie?

Throughout the history of the silver screen, not many talented women have been recognized for their work as directors in the film industry. Notably the first woman to have won an Oscar for directing is Kathryn Bigelow for her work on the war film "The Hurt Locker." This happened in 2010, 81 years after the creation of the [**Academy Award for Best Director**](https://www.oscars.org) and only four women were nominated before that.

On the other hand one could argue that Academy Awards don’t represent a success of a movie and can be very arbitrary, even great Scorsese had to wait seven nomination before getting his Oscar. This is why we decided to measure the success of a movie by looking at the impact of the gender on the revenue.

> Does diversity impact the financial success of a movie? 

To study the revenue we first need to adjust the revenue according to the inflation rate. To this end we use the inflation rate data from **Federal Reserve Economic Data**[^1], specifically the [Consumer Price Index for All Urban Consumers](https://fred.stlouisfed.org/series/CPIAUCNS). Since this inflation data goes all the way back to 1913, therefore, it lends itself to our analysis of film revenues beginning in the early 19th century. The adjustment is done by multiplying the inflation rate factor to the movie revenue.
<center>
<iframe 
    frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="500" src="plots/cpi.html">
</iframe>
</center>



The inflation rate multiplier for a year $$r_{year}$$ is calculcated as

$$
r_{year} = \frac{CPI_{\text{now}}}{CPI_{year}}
$$

The the movie revenue for each year is adjusted by multiplying the revenue by this multiplier, and the revenue after ajustment is shown in the figure below
<center>
<iframe 
    frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="500" src="plots/adjusted_revenue.html">
</iframe>
</center>


### On screen

### Ethnicity

Using the ethnicity, gender, height and age in CMU dataset we want to analyze how comparable are movies with the average population of its countries and how did it change over time.
We notice something interesting: there is a striking difference when it comes to Hispanic representation. 

First of all the Latino population in the United States is the most quickly growing population group these past few decades. According to the United States Census Bureau, the Latino population in the U.S. grew from 3.2 million in 1950 to 62 million in 2020, with an increase of nearly 70% over the past 20 years.

At the same time the share of Hispanic characters has been stagnating between 3% and 5% since 1980s. While this can be partially explained by Latino population’s heavy consumption of South American media this doesn’t change the fact that, there is still much work to be done as when we see a lack of Latino characters on screen, it sends the message that their stories and experiences are not important or valued.

Another interesting thing to note is the growth and fall of African American representation which corresponds to the rise and fall of Blaxploitation films. These were a genre of movies, that isn’t very well know in Europe, that emerged in the 1970s and initially aimed at a  African American audience. These films featured a mostly African American cast and often depicted themes of crime, violence, and empowerment, but they were also controversial in their portrayal of African American culture and were often accused of perpetuating negative stereotypes.

(Because there aren't comprehensive data about different ethnicities we use United States Census Bureau data on races)
<center>
<iframe 
    frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="500" src="plots/US_Census_Percentage.html">
</iframe>
</center>

---TODO---



## Data and Intial Analysis
In this project, we use a combination of different datasets:
 - [CMU Movie Summary Corpus](CMU Movie Summary Corpus) which contains over 40 000 movie plot summaries extracted from Wikipedia and also metadata such as characters information.
 - [Wikidata](https://www.wikidata.org/wiki/) from where we extracted additional movie metadata and extending the CMU Movie dataset.
 - [OpenSubtitles](https://opus.nlpl.eu/OpenSubtitles-v2018.php) from which we were able to extract over 20 000 english subtitles and map to our existing data.
- [Consumer Price Index for All Urban Consumers](https://fred.stlouisfed.org/series/CPIAUCNS) To study the revenue we first need to adjust the revenue according to the inflation rate. To this end we use the inflation rate data from *Federal Reserve Economic Data*. Since this inflation data goes all the way back to 1913, therefore, it lends itself to our analysis of film revenues beginning in the early 19th century.

<center>
<iframe 
frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="500" src="plots/top_21_genre_movies.html">
</iframe>
</center>



<!-- <blockquote>
  But... why do things work the way they do?
</blockquote> -->

## Diversity

### Gender

<!-- <center>
<iframe 
    frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="450" src="plots/gender_count.html">
</iframe>
</center> -->
<center>
<iframe 
    frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="500" src="plots/gender_ratio.html">
</iframe>
</center>
<center>
<iframe 
    frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="500" src="plots/gender_ratio_box_office.html">
</iframe>
</center>
<center>
<iframe 
    frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="500" src="plots/gender_per_genre_over_time5y.html">
</iframe>
</center>

### Age

A movie that represents a diverse range of ages may be more relatable and resonant for a wider range of viewers. Additionally, a diverse cast can help to attract a diverse audience, which can also contribute to the movie's financial success.

In this section, we will study the 
<center>
<iframe 
    frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="500" src="plots/revenue_vs_mean_cast_age.html">
</iframe>
</center>
<center>
<iframe 
    frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="500" src="plots/revenue_vs_cast_age_diff.html">
</iframe>
</center>

### Sentiment Analysis

<center>
<iframe 
    frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="500" src="plots/sentiment_diversity.html">
</iframe>
</center>
1. The first thing to notice in the above plot is that for some of the entries the 95% confidence interval bars are quite large. The main reason behind this is having too few samples for those keywords in the respective year intervals. 
2. The other feature is that all of the average sentiments are negative, which is expected given the plots of distribution of sentiment above, showing `negative` sentiments are more than `negative` sentiments.
3. We observe that except for two cases `man` has the highest sentiment scores across years. It is followed by `women`, which has slightly worse sentiment than `man`. These two keywords have stable mean sentiment scores.
4. All of the remaining keywords carries more negative sentiments than `man` and `woman`, except for two cases. Furthermore, sentiments for `gay` and `queer` has attained lower values as the passes.

<center>
<iframe 
    frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="500" src="plots/sentiment_ethnicity.html">
</iframe>
</center>


## Plots (title to be changes)
<center>
<figure>
<img src="assets/img/trace/gay.svg" style="width:70%">
<figcaption><em>Figure 1.</em> Placeholder caption.</figcaption>
</figure>
</center>

<center>
<figure>
<img src="assets/img/trace/man.svg" style="width:70%">
<figcaption><em>Figure 2.</em> Placeholder caption.</figcaption>
</figure>
</center>

<center>
<figure>
<img src="assets/img/trace/woman.svg" style="width:70%">
<figcaption><em>Figure 3.</em> Placeholder caption.</figcaption>
</figure>
</center>

### Word Cloud
{% include portfolio_grid.html %}


## References

[^1]: **What is FRED?** [https://fredhelp.stlouisfed.org/fred/about/about-fred/what-is-fred](https://fredhelp.stlouisfed.org/fred/about/about-fred/what-is-fred/).
