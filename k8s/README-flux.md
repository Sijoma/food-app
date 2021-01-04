# What the FLUX?!

```
flux create source git food-app \
  --url=https://github.com/Sijoma/food-app \
  --branch=main \
  --interval=30s \
  --export > ./raspi-cluster/food-app/food-app-frontend-source.yaml
```

```
flux create kustomization food-app-common \
  --source=food-app \
  --path="./k8s/common" \
  --prune=true \
  --validation=client \
  --interval=1h \
  --export > ./raspi-cluster/food-app/food-app-common.yaml
```

```
flux create kustomization frontend-food-app \
  --source=food-app \
  --path="./k8s/frontend" \
  --prune=true \
  --validation=client \
  --interval=10m \
  --health-check="Deployment/frontend.food-app" \
  --health-check-timeout=2m \
  --export > ./raspi-cluster/food-app/frontend-food-app.yaml
```