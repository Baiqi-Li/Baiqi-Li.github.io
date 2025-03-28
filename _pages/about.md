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

Hello! I am **Baiqi Li**, a research assistant at Carnegie Mellon University, advised by Professor **Deva Ramanan**. My research focuses on computer vision and language, particularly on evaluation metrics and benchmarks for the cognitive abilities of VLMs and improvement of multimodal generative models. 

# 🔥 News
- *2024.09*: 🎉🎉 Our paper [NaturalBench: Evaluating Vision-Language Models on Natural Adversarial Samples](https://arxiv.org/abs/2410.14669) was accepted by **NeurIPS2024**.
- *2024.08*: 🎉🎉 Our [**VQAScore**](https://arxiv.org/pdf/2404.01291.pdf) was rated by [**Imagen**](https://arxiv.org/abs/2408.07009) as <span style="color:red;">the strongest</span> text-to-vision evaluation metric, and our benchmark, [**GenAI-Bench**](https://arxiv.org/pdf/2406.13743), was also extensively used by [**Imagen**](https://arxiv.org/abs/2408.07009). 
- *2024.06*: 🎉🎉 Our workshop paper [GenAI-Bench: A Holistic Benchmark for Compositional Text-to-Visual Generation](https://openreview.net/forum?id=hJm7qnW3ym) has been selected as **the best paper** at SynData4CV workshop @ CVPR2024.
- *2024.06*: We introduced GenAI-Bench for evaluating the performance of leading image and video generation models in various aspects of compositional text-to-visual generation and evaluation metrics.: [GenAI-Bench: Evaluating and Improving Compositional Text-to-Visual Generation](https://arxiv.org/pdf/2406.13743).
- *2024.06*: We proposed a semi-automated approach to collect a **vision-centric** benchmark, **NaturalBench**, for reliably evaluating VLMs: [NaturalBench: Evaluating Vision-Language Models on Natural Adversarial Samples]().
- *2024.04*: We introduced VQAScore for evaluating the prompt alignment of text-to-image/video/3D models: [Evaluating Text-to-Visual Generation with Image-to-Text Generation](https://arxiv.org/pdf/2404.01291.pdf).


# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS24</div><img src='papers\naturalbench\images\natural_teaser.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**NaturalBench: Evaluating Vision-Language Models on Natural Adversarial Samples**

**Baiqi Li**\*, [Zhiqiu Lin\*](https://linzhiqiu.github.io/), [Wenxuan Peng](https://lilydaytoy.github.io/)\*, [Jean de Dieu Nyandwi](https://nyandwi.com/)\*, [Daniel Jiang](https://www.linkedin.com/in/djiang04), [Zixian Ma](https://zixianma.github.io/), [Simran Khanuja](https://simran-khanuja.github.io/), [Ranjay Krishna &dagger;](https://www.ranjaykrishna.com/index.html), [Graham Neubig &dagger;](https://phontron.com/), [Deva Ramanan &dagger;](https://www.cs.cmu.edu/~deva/)

[Website](https://linzhiqiu.github.io/papers/naturalbench) \| [Arxiv](https://arxiv.org/abs/2410.14669) \| [HuggingFace](https://huggingface.co/datasets/BaiqiL/NaturalBench) | [![Evaluation Code](https://img.shields.io/github/stars/Baiqi-Li/NaturalBench?style=social&label=Code+Stars)](https://github.com/Baiqi-Li/NaturalBench)
- In this work, we show that VLMs still struggle with natural images and questions that humans can easily answer, which we term **natural adversarial samples**.
- We propose a semi-automated approach to collect a new benchmark, **NaturalBench**, for reliably evaluating VLMs with over 10,000 human-verified VQA samples.
- Evaluated NaturalBench on 53 vision-language models, including both open-source and closed-source examples like GPT4-o, Qwen2-VL, Molmo, and InternVL
- Mitigating biases, such as the tendency of GPT-4o to agree with most questions due to lack of calibration, can yield a 100\% improvement in model performance.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ECCV24</div><img src='papers/vqascore/images/vqascore.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Evaluating Text-to-Visual Generation with Image-to-Text Generation**

[Zhiqiu Lin](https://linzhiqiu.github.io/), [Deepak Pathak](https://www.cs.cmu.edu/~dpathak/), **Baiqi Li**, [Emily Li](https://linzhiqiu.github.io/papers/vqascore/), [Xide Xia](https://xidexia.github.io/), [Graham Neubig](https://phontron.com/), [Pengchuan Zhang &dagger;](https://pzzhang.github.io/pzzhang/), [Deva Ramanan &dagger;](https://www.cs.cmu.edu/~deva/)

[Website](https://linzhiqiu.github.io/papers/vqascore/) \| [Arxiv](https://arxiv.org/pdf/2404.01291.pdf) \| [![code](https://img.shields.io/github/stars/linzhiqiu/t2v_metrics?style=social&label=Code+Stars)](https://github.com/linzhiqiu/t2v_metrics)
- We propose VQAScore, the state-of-the-art alignment metric for text-to-image/video/3D models.
- VQAScore based on our new CLIP-FlanT5 model outperforms previous metrics based on GPT-4Vision or costly human feedback.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">In submission</div><img src='papers\genai_bench\images\genaibench.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**GenAI-Bench: Evaluating and Improving Compositional Text-to-Visual Generation**

**Baiqi Li**\*, [Zhiqiu Lin\*](https://linzhiqiu.github.io/), [Deepak Pathak](https://www.cs.cmu.edu/~dpathak/), [Emily Li](https://arxiv.org/pdf/2406.13743), [Feiyi Xin](https://arxiv.org/pdf/2406.13743), [Kewen Wu](https://arxiv.org/pdf/2406.13743), [Tiffany Ling](https://arxiv.org/pdf/2406.13743), [Xide Xia &dagger;](https://xidexia.github.io/), [Pengchuan Zhang &dagger;](https://pzzhang.github.io/pzzhang/), [Graham Neubig &dagger;](https://phontron.com/), [Deva Ramanan &dagger;](https://www.cs.cmu.edu/~deva/)

[Website](https://linzhiqiu.github.io/papers/genai_bench) \| [Arxiv](https://arxiv.org/pdf/2406.13743) \| [HuggingFace](https://huggingface.co/datasets/BaiqiL/GenAI-Bench)
- We conduct an extensive human study on compositional text-to-visual generation using **GenAI-Bench**, revealing limitations of leading open-source and closed-source models. 
- We present a simple black-box approach that improves generation by **ranking** images with VQAScore, significantly surpassing other scoring methods by 2x to 3x. 
- We will release **GenAI-Rank** with over 40,000 human ratings to benchmark methods that rank images generated from the same prompt.
</div>
</div>

# 🎖 Honors and Services
- Reviewer: ICLR, ECAI, TIST ...


# 📖 Research Experience
<!-- - *2024.08 - present, Intern, Texas A&M University and University of California, Davis.  -->
- *2023.08 - present, Research Assistant, Carnegie Mellon University. 

# 💬 Invited Talks
- *2024.05*, I presented [GenAI-Bench/NaturalBench Benchmark] at CMU.

