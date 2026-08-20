---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hello! I’m Baiqi Li, a PhD student in Computer Science at the University of North Carolina at Chapel Hill (Fall 2025 – present), advised by **Gedas Bertasius**. My research focuses on **video reasoning**, **video generation**, and **embodied AI**. Before joining UNC, I was fortunate to work with **Deva Ramanan** at Carnegie Mellon University.

# News
- *2026.06* We introduced **WatchAct**, a benchmark for behavior-grounded robot manipulation: [WatchAct: A Benchmark for Behavior-Grounded Robot Manipulation](https://arxiv.org/pdf/2606.26443).
- *2026.02* We introduced **TimeBlind**, a diagnostic benchmark for compositional spatio-temporal understanding of video LLMs: [TimeBlind: A Spatio-Temporal Compositionality Benchmark for Video LLMs](https://arxiv.org/abs/2602.00288).
- *2024.09* Our paper [NaturalBench: Evaluating Vision-Language Models on Natural Adversarial Samples](https://arxiv.org/abs/2410.14669) was accepted by **NeurIPS2024**.
- *2024.06* Our workshop paper [GenAI-Bench: A Holistic Benchmark for Compositional Text-to-Visual Generation](https://openreview.net/forum?id=hJm7qnW3ym) has been selected as **the best paper** at SynData4CV workshop @ CVPR2024.
- *2024.06* We introduced GenAI-Bench for evaluating the performance of leading image and video generation models in various aspects of compositional text-to-visual generation and evaluation metrics: [GenAI-Bench: Evaluating and Improving Compositional Text-to-Visual Generation](https://arxiv.org/pdf/2406.13743).
- *2024.06* We proposed a semi-automated approach to collect a **vision-centric** benchmark, **NaturalBench**, for reliably evaluating VLMs: [NaturalBench: Evaluating Vision-Language Models on Natural Adversarial Samples](https://arxiv.org/abs/2410.14669).
- *2024.04* We introduced VQAScore for evaluating the prompt alignment of text-to-image/video/3D models: [Evaluating Text-to-Visual Generation with Image-to-Text Generation](https://arxiv.org/pdf/2404.01291.pdf).


# Publications

<div class='paper-box'><div class='paper-box-image'><div><video autoplay loop muted playsinline controls preload="metadata" width="100%"><source src="papers/watchact/watchact.mp4" type="video/mp4"></video></div></div>
<div class='paper-box-text' markdown="1">

**WatchAct: A Benchmark for Behavior-Grounded Robot Manipulation** <span class="pub-venue">arXiv</span>

**Baiqi Li**, Ce Zhang, Yu Fang, Yue Yang, Shangzhe Li, Mingyu Ding, [Gedas Bertasius](https://www.gedasbertasius.com/)

[Website](https://baiqi-li.github.io/watchact_page/) \| [Arxiv](https://arxiv.org/pdf/2606.26443) \| [Code](https://github.com/Baiqi-Li/WatchAct) \| [HuggingFace](https://huggingface.co/datasets/BaiqiL/WatchAct)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='papers/timeblind/images/timeblind_teaser.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**TimeBlind: A Spatio-Temporal Compositionality Benchmark for Video LLMs** <span class="pub-venue">arXiv</span>

**Baiqi Li**, Kangyi Zhao, Ce Zhang, Chancharik Mitra, [Jean de Dieu Nyandwi](https://nyandwi.com/), [Gedas Bertasius](https://www.gedasbertasius.com/)

[Website](https://baiqi-li.github.io/timeblind_project/) \| [Arxiv](https://arxiv.org/abs/2602.00288)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='papers/naturalbench/images/natural_teaser.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**NaturalBench: Evaluating Vision-Language Models on Natural Adversarial Samples** <span class="pub-venue">NeurIPS</span>

**Baiqi Li**\*, [Zhiqiu Lin\*](https://linzhiqiu.github.io/), [Wenxuan Peng](https://lilydaytoy.github.io/)\*, [Jean de Dieu Nyandwi](https://nyandwi.com/)\*, [Daniel Jiang](https://www.linkedin.com/in/djiang04), [Zixian Ma](https://zixianma.github.io/), [Simran Khanuja](https://simran-khanuja.github.io/), [Ranjay Krishna &dagger;](https://www.ranjaykrishna.com/index.html), [Graham Neubig &dagger;](https://phontron.com/), [Deva Ramanan &dagger;](https://www.cs.cmu.edu/~deva/)

[Website](https://linzhiqiu.github.io/papers/naturalbench) \| [Arxiv](https://arxiv.org/abs/2410.14669) \| [HuggingFace](https://huggingface.co/datasets/BaiqiL/NaturalBench) | [![Evaluation Code](https://img.shields.io/github/stars/Baiqi-Li/NaturalBench?style=social&label=Code+Stars)](https://github.com/Baiqi-Li/NaturalBench)
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><img src='papers/vqascore/images/vqascore.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Evaluating Text-to-Visual Generation with Image-to-Text Generation** <span class="pub-venue">ECCV</span>

[Zhiqiu Lin](https://linzhiqiu.github.io/), [Deepak Pathak](https://www.cs.cmu.edu/~dpathak/), **Baiqi Li**, [Emily Li](https://linzhiqiu.github.io/papers/vqascore/), [Xide Xia](https://xidexia.github.io/), [Graham Neubig](https://phontron.com/), [Pengchuan Zhang &dagger;](https://pzzhang.github.io/pzzhang/), [Deva Ramanan &dagger;](https://www.cs.cmu.edu/~deva/)

[Website](https://linzhiqiu.github.io/papers/vqascore/) \| [Arxiv](https://arxiv.org/pdf/2404.01291.pdf) \| [![code](https://img.shields.io/github/stars/linzhiqiu/t2v_metrics?style=social&label=Code+Stars)](https://github.com/linzhiqiu/t2v_metrics)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='papers/genai_bench/images/genaibench.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**GenAI-Bench: Evaluating and Improving Compositional Text-to-Visual Generation** <span class="pub-venue">The best paper at SynData4CV</span>

**Baiqi Li**\*, [Zhiqiu Lin\*](https://linzhiqiu.github.io/), [Deepak Pathak](https://www.cs.cmu.edu/~dpathak/), [Emily Li](https://arxiv.org/pdf/2406.13743), [Feiyi Xin](https://arxiv.org/pdf/2406.13743), [Kewen Wu](https://arxiv.org/pdf/2406.13743), [Tiffany Ling](https://arxiv.org/pdf/2406.13743), [Xide Xia &dagger;](https://xidexia.github.io/), [Pengchuan Zhang &dagger;](https://pzzhang.github.io/pzzhang/), [Graham Neubig &dagger;](https://phontron.com/), [Deva Ramanan &dagger;](https://www.cs.cmu.edu/~deva/)

[Website](https://linzhiqiu.github.io/papers/genai_bench) \| [Arxiv](https://arxiv.org/pdf/2406.13743) \| [HuggingFace](https://huggingface.co/datasets/BaiqiL/GenAI-Bench)
</div>
</div>

# Research Experience

- 2025.08 - present, PhD, University of North Carolina at Chapel Hill.
- 2024.01 - 2025.06, Research Assistant, Carnegie Mellon University.

# Others
- Teaching Assistant, COMP 669: Vision Transformers, 2026 Fall.
- Teaching Assistant, COMP 577: Introduction to Computer Vision, 2026 Fall.
- Reviewer: NeurIPS, ICLR, ICML, CVPR, ECCV, etc.


