---
layout: page
usemathjax: true
---

## Introduction
The movie industry has long been criticized for its lack of diversity both **on** and **off** screen. Despite numerous efforts to address this issue, the representation of marginalized groups remains inadequate, with many voices and perspectives still underrepresented or completely absent from mainstream films. This lack of diversity not only perpetuates harmful stereotypes and biases, but it also limits the stories and perspectives that are told and perpetuates a narrow and limited view of the world.

## Data and Intial Analysis
In this project, we use a combination of different datasets:
 - [CMU Movie Summary Corpus](http://www.cs.cmu.edu/~ark/personas/) which contains over 40,000 movie plot summaries extracted from Wikipedia and also metadata such as characters, genre, release date information.
 - [Wikidata](https://www.wikidata.org/wiki/) from where we extracted additional movie metadata and extending the CMU Movie dataset.
 - [OpenSubtitles](https://opus.nlpl.eu/OpenSubtitles-v2018.php) from which we were able to extract over 20 000 english subtitles and map to our existing data.
- [Consumer Price Index for All Urban Consumers](https://fred.stlouisfed.org/series/CPIAUCNS) To study the revenue we first need to adjust the revenue according to the inflation rate. To this end we use the inflation rate data from *Federal Reserve Economic Data*. Since this inflation data goes all the way back to 1913, therefore, it lends itself to our analysis of film revenues beginning in the early 19th century.

## Research questions

To find out what it was like it the history of movie industy, we devised our reseach questions into two categories: **On** screen and **Off** screen where we will take a deeper look at the diversity in the movie industry.
{% include services.html %}
### Diversity Off screen

> What is the evolution of the gender Gap in movies? Is there a significant difference in number of movies directed by men vs women? And does the gender of lead actor or director impact the revenue of a movie?

Throughout the history of the silver screen, not many talented women have been recognized for their work as directors in the film industry. Notably the first woman to have won an Oscar for directing is Kathryn Bigelow for her work on the war film "The Hurt Locker." This happened in 2010, 81 years after the creation of the [**Academy Award for Best Director**](https://www.oscars.org) and only four women were nominated before that.

On the other hand one could argue that Academy Awards don’t represent a success of a movie and can be very arbitrary, even great Scorsese had to wait seven nomination before getting his Oscar. This is why we decided to measure the success of a movie by looking at the impact of the gender on the revenue.

> Does diversity impact the financial success of a movie? 

To give our readers a brief view of the movies we use, we plot the top 21 genres in the movie dataset we combined.
<center>
<iframe 
frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="500" src="plots/top_21_genre_movies.html">
</iframe>
</center>

To study the revenue we first need to adjust the revenue according to the inflation rate. To this end we use the inflation rate data from **Federal Reserve Economic Data**[^1], specifically the [Consumer Price Index for All Urban Consumers](https://fred.stlouisfed.org/series/CPIAUCNS). Since this inflation data records CPI from year 2022 and goes all the way back to 1913, therefore, it lends itself to our analysis of film revenues beginning in the early 19th century. The adjustment is done by multiplying the inflation rate factor to the movie revenue.
<center>
<iframe 
    frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="500" src="plots/cpi.html">
</iframe>
</center>

The inflation rate multiplier for a year $$r_{year}$$ is calculcated as

$$
r_{year} = \frac{CPI_{\text{2022}}}{CPI_{year}}
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
    frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="500" src="plots/US_Census_Percentage.html ">
</iframe>
</center>

---TODO---




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

Let's now turn our focus to another simple yet widely used metric to determine the diversity of a community - age. A common 

A movie that represents a diverse range of ages may be more relatable and resonant for a wider range of viewers. Additionally, a diverse cast can help to attract a diverse audience, which can also contribute to the movie's financial success.

In this part, we will try to unravel the mistery in our data to see if a more diversed cast in terms of age can ripple through more audiences thus generating higher movie box revenue.
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
To gain deeper insight into the language used in movies, we run experiments of [OpenSubtitles](https://opus.nlpl.eu/OpenSubtitles-v2018.php) corpus, which is a collection of translated movie subtitles from [opensubtitles](http://www.opensubtitles.org/). We matched 27,329 subtitles from the corpus with the CMU dataset and extracted 74,518,995 tokens after lemmatization and stopword removal. We then split the corpus into 5 bins comprised of an equal number of tokens to compare the language across years.

For each keyword, we extracted both fix-sized context windows and dialogue sentences from subtitles and predicted their sentiment class with a transformer-based sentiment analyzer, [roBERTa-base](https://huggingface.co/cardiffnlp/twitter-roberta-base-sentiment-latest).

<center>
<iframe 
    frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="500" src="plots/sentiment_diversity.html">
</iframe>
</center>

To demystify the plot above, we first point out two key elements. First, we realize that all the sentiment scores are below zero. The reason behind this is 54.4% of analyzed sentences have a sentiment label `Neutral`, followed by 29.0% `Negative`. Another point to notice is the large 95% confidence interval bars for some entries. This due to having too few samples for those keywords in the respective year intervals.

At first glance, we observe an overall negative sentiment for non-binary gender keywords compared to `man` and `woman` throughout the span of the dataset. What is more interesting is that the mean sentiment score for keywords `gay` and `queer` (which are the most frequent non-binary gender terms) even decreased compared to 1972 and before. This hints at the usage of non-binary terms in negative contexts with verbal slurs more often in movies. As our dataset does not include recent movies, we don’t see the effects of increased sensibility toward gender equality.

<center>
<iframe 
    frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="500" src="plots/sentiment_ethnicity.html">
</iframe>
</center>




As for the ethnicity-related keywords, the decrease in the sentiment of the term `mexican` is distinguishable from the rest. Upon further inspection, we further realized that this is a reflection of the tension between the US and Mexico border and issues related to immigrants. In addition, the sentiment towards `russia` is also distinctively negative; however, it starts to raise after the dissolution of the USSR.

## Plots (title to be changed)
<center>
<figure>
<img src="assets/img/trace/gay.svg" style="width:80%">
<figcaption><em>Figure 1.</em> Placeholder caption.</figcaption>
</figure>
</center>

<center>
<figure>
<img src="assets/img/trace/man.svg" style="width:80%">
<figcaption><em>Figure 2.</em> Placeholder caption.</figcaption>
</figure>
</center>

<center>
<figure>
<img src="assets/img/trace/woman.svg" style="width:80%">
<figcaption><em>Figure 3.</em> Placeholder caption.</figcaption>
</figure>
</center>

### Word Cloud
{% include portfolio_grid.html %}


## References

[^1]: **What is FRED?** [https://fredhelp.stlouisfed.org/fred/about/about-fred/what-is-fred](https://fredhelp.stlouisfed.org/fred/about/about-fred/what-is-fred/).
