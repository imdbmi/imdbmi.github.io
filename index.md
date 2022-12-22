---
layout: page
usemathjax: true
---
## Data and Intial Analysis
In this project, we use dataset from CMU Movie Dataset, this dataset was collected by 

To study the revenue we first need to adjust the revenue according to the inflation rate. To this end we use the inflation rate data from *Federal Reserve Economic Data*, specifically the [Consumer Price Index for All Urban Consumers](https://fred.stlouisfed.org/series/CPIAUCNS). Since this inflation data goes all the way back to 1913, therefore, it lends itself to our analysis of film revenues beginning in the early 19th century.

<center>
<iframe 
    frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="500" src="plots/top_30_genre_movies.html">
</iframe>
</center>

<center>
<iframe 
    frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="500" src="plots/cpi.html">
</iframe>
</center>

<center>
<iframe 
    frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="500" src="plots/adjusted_revenue.html">
</iframe>
</center>


<blockquote>
  But... why do things work the way they do?
</blockquote>

## Research Questions
{% include services.html %}

## Sample paragraph

"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
<center>
<figure>
<img src="assets/img/story/placeholder.jpg" style="width:50%">
<figcaption><em>Figure 1.</em> Placeholder image.</figcaption>
</figure>
</center>

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

[^1]: Greenpeace, *Bees in Decline*, 2013 [http://sos-bees.org/wp-content/uploads/2014/04/BeesInDecline.pdf](http://sos-bees.org/wp-content/uploads/2014/04/BeesInDecline.pdf)

[^2]: [The Balance, _Colony Collapse Disorder and Its Impact on the Economy_, 2019](https://www.thebalance.com/bee-colony-collapse-disorder-facts-and-economic-impact-3305815)
