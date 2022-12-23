---
layout: page
usemathjax: true
---

## Introduction
The movie industry has long been criticized for its lack of diversity both **on** and **off** screen. Despite numerous efforts to address this issue, the representation of marginalized groups remains inadequate, with many voices and perspectives still underrepresented or completely absent from mainstream films. 

This lack of diversity not only perpetuates harmful stereotypes and biases, but it also limits the stories and perspectives that are told and perpetuates a narrow and limited view of the world. It is important for the movie industry to prioritize diversity in order to accurately and fairly represent the diverse experiences and perspectives of people from all walks of life.

## Research questions

Our reseach questions can be divided into two parts: **on** screen and **off** screen where we will take a deeper look at the diversity in the movie industry.
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

> Using the ethnicity, gender, height and age in CMU dataset we want to analyze how comparable are movies with the average population of its countries and how did it change over time.

When comparing the US Census data and CMU Characters by ethnicity we notice a striking difference when it comes to Hispanic representation.  While there has been some progress in terms of Latino representation in Hollywood, there is still much work to be done in order to achieve true equality and authenticity in the industry, especially as the Latino population is the fastest growing population group in the US.

When we see a lack of Latino characters on screen, it sends the message that their stories and experiences are not important or valued. This lack of representation can also perpetuate harmful stereotypes and contribute to a culture of marginalization and discrimination.

Blaxploitation films were a genre of movies that emerged in the 1970s and were aimed at a primarily African American audience. These films often featured African American actors in lead roles and often depicted themes of crime, violence, and empowerment.

Overall, blaxploitation films were an important part of Hollywood history, but they were also controversial and limited in their portrayal of African American culture. While they may have provided some representation for African American actors and audiences, they also perpetuated negative stereotypes and did not fully capture the complexity and diversity of African American experiences.

> Lingustic analysis of LGBT characters: How did the terms and tones used changed when talking about a LGBT character? And how did positive LGBT potrayal change over time?

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
    frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="450" src="plots/gender_ratio.html">
</iframe>
</center>
<center>
<iframe 
    frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="450" src="plots/gender_ratio_box_office.html">
</iframe>
</center>
<center>
<iframe 
    frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="650" src="plots/gender_per_genre_over_time5y.html">
</iframe>
</center>

### Age

A movie that represents a diverse range of ages may be more relatable and resonant for a wider range of viewers. Additionally, a diverse cast can help to attract a diverse audience, which can also contribute to the movie's financial success.

In this section, we will study the 
<center>
<iframe 
    frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="650" src="plots/revenue_vs_mean_cast_age.html">
</iframe>
</center>
<center>
<iframe 
    frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="650" src="plots/revenue_vs_cast_age_diff.html">
</iframe>
</center>

### Sentiment Analysis

<center>
<iframe 
    frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="650" src="plots/sentiment_diversity.html">
</iframe>
</center>

<center>
<iframe 
    frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="650" src="plots/sentiment_ethnicity.html">
</iframe>
</center>



## References

[^1]: **What is FRED?** [https://fredhelp.stlouisfed.org/fred/about/about-fred/what-is-fred](https://fredhelp.stlouisfed.org/fred/about/about-fred/what-is-fred/).